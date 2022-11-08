import UnitFinanceTable from '@/components/lib/UnitFinanceTable/UnitFinanceTable';
import { data } from '@/data/unitFinance';

const UnitFinanceData = () => {
  return <UnitFinanceTable tableData={data} page={1} limit={10} pages={1} />;
};

export default UnitFinanceData;
