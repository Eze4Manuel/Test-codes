/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable no-nested-ternary */
import { Icon } from '@iconify/react';
import type { FC } from 'react';
import React, { memo } from 'react';

import ToolTip from '../ToolTip/ToolTip';
import type { StatusIndicatorProps } from './RequestStatusIndicator.props';

const RequestStatusIndicator: FC<StatusIndicatorProps> = memo(({ status }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={
          status === 'Budget Approved'
            ? 'w-full rounded-full border-2 border-cci-green bg-[#D5EFDC] px-2 py-1 text-center text-cci-green md:w-[166px]'
            : status === 'Request Pending'
            ? 'w-full rounded-full border-2 border-[#FFA471] bg-[#FFA471] bg-opacity-30 px-2 py-1 text-center text-[#FFA471] md:w-[166px]'
            : 'w-full rounded-full border-2 border-[#B20000] bg-[#B20000] bg-opacity-30 px-2 py-1 text-center text-[#B20000] md:w-[166px]'
        }
      >
        <p>{status}</p>
      </div>
      {status === 'Budget Rejected' && (
        <ToolTip
          header="Resident Pastor Feedback"
          subHeader="Adjust budget, review costs for SMS charges."
        >
          <Icon icon="carbon:arrow-down" />
        </ToolTip>
      )}
    </div>
  );
});
RequestStatusIndicator.displayName = 'RequestStatusIndicator';
export default RequestStatusIndicator;
