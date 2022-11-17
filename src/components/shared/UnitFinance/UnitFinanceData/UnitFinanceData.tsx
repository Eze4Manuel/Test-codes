import type { FC } from 'react';

import UnitFinanceTable from '@/components/lib/UnitFinanceTable/UnitFinanceTable';

import type { UnitFinancePros } from '../UnitFinance.props';

const UnitFinanceData: FC<UnitFinancePros> = ({ data }) => {
  return <UnitFinanceTable tableData={data} page={1} limit={10} pages={1} />;
};

export default UnitFinanceData;
