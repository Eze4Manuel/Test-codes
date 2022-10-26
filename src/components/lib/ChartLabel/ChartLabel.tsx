const allData = [
  {
    sex: 'Men',
    color: 'bg-cci-grey',
  },
  {
    sex: 'Women',
    color: 'bg-cci-green',
  },
  {
    sex: 'Children',
    color: 'bg-cci-red',
  },
];

const ChartLabel = () => {
  return (
    <div className="my-8 flex gap-[1.5em]">
      {allData.map((data, index) => (
        <div className="flex items-center" key={index}>
          <div className={`h-4 w-4 rotate-45 ${data.color}`}></div>
          <span className="ml-2">{data.sex}</span>
        </div>
      ))}
    </div>
  );
};

export default ChartLabel;
