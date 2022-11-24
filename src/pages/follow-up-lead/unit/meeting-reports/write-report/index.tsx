import { Icon } from '@iconify/react';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

import Button from '@/components/lib/Button';
import WYSIWYGEditor from '@/components/lib/WYSIWYGEditor';
import { useAppSelector } from '@/hooks';
import { useHandleOutsideClicks } from '@/hooks/useHandleOutsideClicks';
import AuthLayout from '@/layouts/AuthLayout';
import TabViewLayout from '@/layouts/TabViewLayout';
import followUpLeadUnitTabs from '@/layouts/TabViewLayout/followUpLead/followUpLeadUnitTabs';
import { createUnitMeetingReport } from '@/services/reports';
import Meta from '@/templates/Meta';
import { processResponse } from '@/utils/response/processResponse';

const WriteReport = () => {
  const [error, setError] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const calender = useRef<null | HTMLDivElement>(null);
  const [createdAt, setCreatedAt] = useState<Date | null>(new Date());

  const [reportData, setReportData] = useState({
    report: '',
    date: new Date().toISOString(),
    campus: user?.campusId
      ? user.campusId
      : '3cece26c-e6c2-485a-9caa-9432be17b4be',
    unit: user?.unit ? user.unit : 'AMBIENCE_UNIT',
  });

  const [show, setShow] = useState(false);
  const router = useRouter();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // create report
  const { mutate, isLoading: isPosting } = useMutation(
    createUnitMeetingReport,
    {
      onSuccess(response) {
        const data = processResponse(response);

        if (data) {
          toast.success('Report created successfully!');
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

    mutate({
      ...reportData,
      report: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  const handleDateChange = (date: Date) => {
    setReportData({
      ...reportData,
      date: date.toISOString(),
    });
    setCreatedAt(date);
  };

  useHandleOutsideClicks(calender, () => setShow(false));

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
          <div className="my-4 mb-7 flex items-center justify-between gap-3 md:justify-start">
            <span className="whitespace-nowrap font-[700] text-cci-black">
              Date:
            </span>
            <div
              ref={calender}
              className="relative h-[34.97px] w-[80%] cursor-pointer rounded-[5px] border-[1.5px] border-cci-grey-dim2 bg-inherit p-1 px-2 outline-none focus:border-cci-grey-dim2 md:w-max"
            >
              <div
                onClick={() => setShow(!show)}
                className="flex items-center justify-between"
              >
                <span>{`${moment(createdAt).format('MMM DD, YYYY')}`}</span>
                <span className="flex justify-end">
                  <Icon
                    icon="material-symbols:keyboard-arrow-down-rounded"
                    className="text-2xl"
                  />
                </span>
              </div>
              {show && (
                <div className="absolute top-[110%] left-0 z-50">
                  <ReactDatePicker
                    onChange={handleDateChange}
                    selected={createdAt}
                    startDate={createdAt}
                    maxDate={new Date()}
                    value={moment(createdAt).format('MMM DD, YYYY')}
                    inline
                  />
                </div>
              )}
            </div>
          </div>

          <h1 className="flex items-center gap-4 font-[700]">Write Report </h1>

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
