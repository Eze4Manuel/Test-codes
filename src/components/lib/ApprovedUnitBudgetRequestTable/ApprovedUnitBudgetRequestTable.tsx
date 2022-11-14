import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { useState } from 'react';

import Checkbox from '@/components/lib/Checkbox';
import { approvedUniTableData } from '@/data/unitTable';

const ApprovedUnitBudgetRequestTable: FC = () => {
  const [file, setFile] = useState<File | null>();
  const [expenditure, setExpenditure] = useState<number>(0);
  const [ids, setIds] = useState<string[]>([]);

  // get total of the items price
  const totalPrice = approvedUniTableData.reduce((accumulator, object) => {
    return accumulator + parseInt(object.price, 10);
  }, 0);

  const expenditureHandler = (arg: string, price: string) => {
    //   do no add if the item already exist in the array
    if (!ids.includes(arg)) {
      // add new item to the array
      setIds((prevValues) => [...prevValues, arg]);
      // converts the itemPrice from string to number and increase expenditure
      setExpenditure((prev) => prev + parseInt(price, 10));
    } else {
      //   get the index of the element
      const index = ids.indexOf(arg);
      // remove from the array
      ids.splice(index, 1);
      // converts the itemPrice from string to number and decrease expenditure
      setExpenditure((prev) => prev - parseInt(price, 10));
    }
  };
  // balance
  const balance = totalPrice - expenditure;

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-6 md:w-[60%]">
        <div className="flex items-center gap-2">
          <Icon icon="ci:dot-03-m" className="text-2xl" />

          <p>
            Cash Inflow :{' '}
            <span className="font-bold">
              NGN {totalPrice.toLocaleString()}.00
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="ci:dot-03-m" className="text-2xl text-cci-green" />

          <p>
            Current Balance :{' '}
            <span className="font-bold text-cci-green">
              NGN {balance.toLocaleString()}.00
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="ci:dot-03-m" className="text-2xl text-cci-red" />

          <p>
            Expenditure :{' '}
            <span className="font-bold text-cci-red">
              NGN {expenditure.toLocaleString()}.00
            </span>
          </p>
        </div>
      </div>
      <div className="mt-12 w-full lg:mt-14">
        <table className="block border-collapse overflow-x-scroll border border-[#686868]  md:overflow-x-hidden">
          <thead className="block w-full">
            <tr className="flex h-[50px] whitespace-nowrap text-xs font-[500] md:grid md:grid-cols-4 ">
              <th className="min-w-[10%]text-center  my-auto flex items-center  px-4 ">
                S/N
              </th>
              <th className="items-centerpx-4 my-auto flex min-w-[23%]  text-center">
                Item Name
              </th>
              <th className="my-auto flex min-w-[23%] items-center px-4  text-center">
                Item Price
              </th>
              <th className="my-auto flex min-w-[23%] items-center px-4  text-center">
                Proof of Payment
              </th>
            </tr>
          </thead>
          <tbody className="block w-full">
            {approvedUniTableData.map((item, index) => (
              <tr
                key={index}
                className="flex h-[50px] text-sm font-[500] text-cci-grey-dim md:grid  md:grid-cols-4"
              >
                <td className="flex min-w-[10%] items-center border border-[#68686880] px-2 py-1  text-center">
                  {index + 1}
                </td>
                <td className="flex min-w-[30%] items-center border border-[#68686880] px-2 py-1  text-center">
                  <div className="flex items-center gap-3 ">
                    <Checkbox
                      theme="darkBlack"
                      onClick={() => {
                        expenditureHandler(item.id, item.price);
                      }}
                      checked={ids.includes(item.id)}
                    />
                    <p> {item.name}</p>
                  </div>
                </td>
                <td className="flex min-w-[30%] items-center border border-[#68686880] px-2 py-1  text-center">
                  <p>NGN {item.price}.00</p>
                </td>
                <td className="flex   min-w-[30%] place-items-center items-center border border-[#68686880] px-2 py-1   text-center">
                  <label htmlFor="image">
                    <input
                      id="image"
                      name="itemImage"
                      className="hidden"
                      type="file"
                      onChange={(event) => {
                        if (event.currentTarget.files?.[0]) {
                          setFile(event.currentTarget.files?.[0]);
                        }
                      }}
                    />

                    {file && parseInt(item.id, 10) === index + 1 ? (
                      <p> {file?.name}</p>
                    ) : (
                      <div className="flex cursor-pointer items-center gap-2">
                        <Icon icon="carbon:add" className="text-2xl" />
                        <p className=" text-xs">Upload JPEG/PDF</p>
                      </div>
                    )}
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10 flex items-center justify-between font-bold md:w-[40%] ">
          <p>TOTAL</p>
          <p>NGN {totalPrice.toLocaleString()}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedUnitBudgetRequestTable;
