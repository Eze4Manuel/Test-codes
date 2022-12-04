import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import moment from 'moment';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Loader from '@/components/lib/Loader';
import Modal from '@/components/lib/Modal';
import Text from '@/components/lib/Text';
import WYSIWYGEditor from '@/components/lib/WYSIWYGEditor';
import { Caution } from '@/public/assets/icons/caution';
import { getUnitReportById, updateReport } from '@/services/reports';
import { processResponse } from '@/utils/response/processResponse';

import type UnitViewReportProps from './UnitViewReport.props';

const UnitViewReport: FC<UnitViewReportProps> = ({ role }) => {
  const router = useRouter();
  const { id } = router.query;

  const [toggleModal, setToggleModal] = useState(false);
  const [reportData, setReportData] = useState({
    report: '',
    start_date: '',
    end_date: '',
  });

  const [error, setError] = useState(false);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(''))
  );

  const { mutate, isLoading: isPatching } = useMutation(
    () =>
      updateReport(id, {
        ...reportData,
        report: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      }),
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          toast.success('Report updated successfully!');
          setToggleModal(false);
          router.back();
        }
      },
    }
  );

  // update report handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    if (!editorState.getCurrentContent().hasText()) {
      setError(true);
      return;
    }

    mutate();
  };

  // get current report
  const { isFetching } = useQuery(
    'getUnitReportById',
    () => getUnitReportById(id),
    {
      onSuccess(response) {
        const res = processResponse(response);

        if (res) {
          if (res.report) {
            const blocksFromHTML = convertFromHTML(res.report);
            const state = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap
            );

            setEditorState(EditorState.createWithContent(state));
          }

          setReportData({
            report: res.report,
            start_date: res.start,
            end_date: res.end,
          });
        }
      },
      enabled: !!id,
    }
  );

  return (
    <>
      <section>
        <h1 className="flex items-center gap-4 font-[700]">
          View Report{' '}
          <span className="font-[500]">
            {isFetching ? (
              <div className="relative h-full w-full">
                <Loader color="grey" className="inline-block" />
              </div>
            ) : (
              <span>
                {`${moment(new Date(reportData?.start_date)).format(
                  'MMM DD'
                )} - ${moment(new Date(reportData?.end_date)).format(
                  'MMM DD, YYYY'
                )}`}
              </span>
            )}
          </span>
        </h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          {isFetching ? (
            <div className="relative h-full w-full">
              <Loader
                color="grey"
                className="absolute top-1/2 -translate-y-1/2"
              />
            </div>
          ) : (
            <div className="my-4">
              {role ? (
                <WYSIWYGEditor
                  error={error}
                  helperText={error ? 'Body cannot be empty' : ''}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  readOnly
                />
              ) : (
                <WYSIWYGEditor
                  error={error}
                  helperText={error ? 'Body cannot be empty' : ''}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              )}
            </div>
          )}

          {role ? (
            <></>
          ) : (
            <div className="mt-8 flex gap-4">
              <Button
                type="submit"
                size="medium"
                className="basis-[48%] md:basis-1"
                loading={isPatching}
              >
                Save
              </Button>
              <Button
                type="button"
                variant="outline"
                size="medium"
                className="basis-[48%] md:basis-1"
                // onClick={handleDeletion}
              >
                Delete
              </Button>
            </div>
          )}
        </form>
      </section>

      {toggleModal && (
        <Modal size="small">
          <div className="px-6 lg:px-8 lg:pt-4">
            <div className="my-6 mx-auto w-[45px] lg:w-[72px]">{Caution}</div>
            <Heading className="text-[26px] lg:text-[30px]">Warning</Heading>
            <Text className="mb-4 text-[14px] md:mb-4 md:font-[500] lg:text-[16px]">
              Are you sure you want to delete this report?
            </Text>
            <div className="-mx-6 mt-6 flex w-auto border border-t-[#68686880] lg:-mx-8">
              <p
                className="basis-1/2 cursor-pointer border-r border-t-[#68686880] p-4"
                onClick={() => setToggleModal(false)}
              >
                CANCEL
              </p>
              <p className="basis-1/2 cursor-pointer p-4 text-cci-red">
                YES, DELETE
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UnitViewReport;
