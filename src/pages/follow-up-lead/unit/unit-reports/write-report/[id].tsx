import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';

import Button from '@/components/lib/Button';
import Loader from '@/components/lib/Loader';
import WYSIWYGEditor from '@/components/lib/WYSIWYGEditor';
import { useAppSelector } from '@/hooks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import { createReport, getUnitReportById } from '@/services/reports';
import Meta from '@/templates/Meta';
import { processResponse } from '@/utils/response/processResponse';

const WriteReport = () => {
  const [reportData, setReportData] = useState({
    report: '',
    start: '',
    end: '',
    campus: '',
    unit: '',
  });

  const [error, setError] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { user } = useAppSelector((state) => state.user);

  const { isFetching } = useQuery(
    'getUnitReportById',
    () => getUnitReportById(id),
    {
      onSuccess(response) {
        const res = processResponse(response);

        if (res) {
          setReportData((prev) => {
            return {
              ...prev,
              start: res.start,
              end: res.end,
              campus: res.id,
              unit: user?.unit ? user.unit : 'AMBIENCE_UNIT',
            };
          });
        }
      },
      enabled: !!id,
    }
  );

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // create report
  const { mutate, isLoading: isPosting } = useMutation(createReport, {
    onSuccess(response) {
      // const data = processResponse(response);

      if (response) {
        toast.success('Report created successfully!');
        router.back();
      }
    },
  });

  // update report handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    if (!editorState.getCurrentContent().hasText()) {
      setError(true);
      return;
    }

    mutate({
      ...reportData,
      report: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  return (
    <AuthLayout
      meta={
        <Meta
          title="Unit Report | Follow-up Unit Lead"
          description="Unit report for the follow up unit."
        />
      }
    >
      <TabViewLayout tabs={followUpLeadUnitTabs}>
        <section>
          <h1 className="flex items-center gap-4 font-[700]">
            Write Report{' '}
            <span className="font-[500]">
              {isFetching ? (
                <div className="relative h-full w-full">
                  <Loader color="grey" className="inline-block" />
                </div>
              ) : (
                <span>
                  {`${moment(new Date(reportData?.start)).format(
                    'MMM DD'
                  )} - ${moment(new Date(reportData?.end)).format(
                    'MMM DD, YYYY'
                  )}`}
                </span>
              )}
            </span>
          </h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="my-4">
              <WYSIWYGEditor
                error={error}
                helperText={error ? 'Body cannot be empty' : ''}
                editorState={editorState}
                onEditorStateChange={(state) => setEditorState(state)}
              />
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                size="medium"
                className="basis-[48%] md:basis-1"
                loading={isPosting}
              >
                Save
              </Button>
            </div>
          </form>
        </section>
      </TabViewLayout>
    </AuthLayout>
  );
};

export default WriteReport;
