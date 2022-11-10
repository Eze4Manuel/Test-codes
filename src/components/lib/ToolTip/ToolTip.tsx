import React, { memo } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  header: string;
  subHeader: string;
};

const ToolTip: React.FC<TooltipProps> = memo((props) => {
  return (
    <div className="group relative">
      <div className=" pointer-events-none absolute top-10 left-1/2  h-[100px] w-[300px] -translate-x-1/2 rounded bg-white py-1  px-4 text-black opacity-0 shadow-xl transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        <p className=" my-2 font-bold text-cci-red">{props.header}</p>
        <p>{props.subHeader}</p>
      </div>

      {props.children}
    </div>
  );
});

ToolTip.displayName = 'ToolTip';

export default ToolTip;
