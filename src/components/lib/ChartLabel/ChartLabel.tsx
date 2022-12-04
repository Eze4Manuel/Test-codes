import type { FC } from 'react';

import type { DataProps } from './chartLabel.props';

const ChartLabel: FC<DataProps> = ({ data }) => {
  return (
    <div className="my-8 flex gap-[1.5em]">
      {data.map((item, index) => (
        <div className="flex items-center" key={index}>
          <div className={`h-2 w-2 rotate-45 ${item.color}`}></div>
          <span className="ml-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLabel;
