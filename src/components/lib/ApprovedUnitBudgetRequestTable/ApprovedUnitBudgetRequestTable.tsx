import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';

import Checkbox from '@/components/lib/Checkbox';
import { checkBudgetItem } from '@/services/budgetrequest';
import { processResponse } from '@/utils/response/processResponse';

import Loader from '../Loader';
import type { IApprovedUnitBudgetTableProps } from './ApprovedUnitBudgetrequestTable.props';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const ApprovedUnitBudgetRequestTable: FC<IApprovedUnitBudgetTableProps> = ({
  data,
  loading,
}) => {
  const [file, setFile] = useState<any>();
  const [currentItem, setCurrentItem] = useState('');
  const [expenditure, setExpenditure] = useState<number>(0);
  const [ids, setIds] = useState<string[]>([]);
  const budgetApproved = data?.status === 'APPROVED';

  const { mutate } = useMutation(checkBudgetItem, {
    onSuccess(response) {
      const uploadData = processResponse(response);
      if (uploadData) {
        toast.success('Proof of payment upload  successfully!');
      }
    },
  });

  // get total of the items price
  const totalPrice = data?.items.reduce((accumulator, object) => {
    return accumulator + object.cost;
  }, 0);

  const expenditureHandler = (arg: string, price: number) => {
    //   do no add if the item already exist in the array
    if (!ids.includes(arg)) {
      // add new item to the array
      setIds((prevValues) => [...prevValues, arg]);
      // converts the itemPrice from string to number and increase expenditure
      setExpenditure((prev) => prev + price);
    } else {
      //   get the index of the element
      const index = ids.indexOf(arg);
      // remove from the array
      ids.splice(index, 1);
      // converts the itemPrice from string to number and decrease expenditure
      setExpenditure((prev) => prev - price);
    }
  };
  // balance
  const balance = totalPrice && totalPrice - expenditure;

  const imageUploadHandler = (e: InputEvent, id: string) => {
    setCurrentItem(id);

    if (id === currentItem) {
      if (e.currentTarget.files?.[0]) {
        setFile(e.currentTarget.files?.[0]);
      } else {
        setCurrentItem('');
      }
    }
    const formData = new FormData();
    formData.append('image', file);
    mutate({
      query: currentItem,
    });
  };

  if (loading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <Loader color="#000000" small={false} />
      </div>
    );
  }

  if (data === null || !data) {
    return (
      <div className="my-20 flex items-center justify-center text-xl">
        <p>There is no budget for the selected date interval</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-4 flex flex-wrap justify-between gap-6 md:w-[60%]">
        <div className="flex items-center gap-2">
          <Icon icon="ci:dot-03-m" className="text-2xl" />

          <p>
            Cash Inflow :{' '}
            <span className="font-bold">
              NGN {totalPrice && totalPrice.toLocaleString()}.00
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="ci:dot-03-m" className="text-2xl text-cci-green" />

          <p>
            Current Balance :{' '}
            <span className="font-bold text-cci-green">
              NGN {balance && balance.toLocaleString()}.00
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
        <table className="block overflow-x-scroll md:overflow-x-hidden">
          <thead className=" block w-full">
            <tr className="flex border-b border-cci-grey font-bold">
              <td
                className={
                  budgetApproved
                    ? 'min-w-[6%] border-r-2 border-cci-grey py-3 text-left'
                    : 'min-w-[20%] border-r-2 border-cci-grey py-3 text-left'
                }
              >
                SN
              </td>
              <td
                className={
                  budgetApproved
                    ? 'min-w-[32%] border-r-2 border-cci-grey py-3 '
                    : 'min-w-[40%] border-r-2 border-cci-grey py-3 '
                }
              >
                <span className="relative left-1 sm:left-12">Item Name</span>
              </td>
              <td
                className={
                  budgetApproved
                    ? 'min-w-[32%] border-r-2 border-cci-grey py-3 '
                    : 'min-w-[40%] border-r-2 border-cci-grey py-3 '
                }
              >
                <span className="relative left-1 sm:left-12 ">
                  Cost of Item
                </span>
              </td>
              {budgetApproved && (
                <td className="min-w-[30%] border-r-2 border-cci-grey py-3 ">
                  <span className="relative left-1 sm:left-12 ">
                    Proof of Payment
                  </span>
                </td>
              )}
            </tr>
          </thead>
          <tbody className="block w-full">
            {data?.items.map((item, index) => (
              <tr
                key={index}
                className="flex h-[70px] border-b border-cci-grey"
              >
                <td
                  className={
                    budgetApproved
                      ? 'min-w-[6%] border-r-2 border-cci-grey py-3 text-left'
                      : 'min-w-[20%] border-r-2 border-cci-grey py-3 text-left'
                  }
                >
                  <span className="relative top-2 text-cci-grey">
                    {index + 1}
                  </span>
                </td>
                <td
                  className={
                    budgetApproved
                      ? 'min-w-[32%] border-r-2 border-cci-grey py-3'
                      : 'min-w-[40%] border-r-2 border-cci-grey py-3'
                  }
                >
                  <div className="relative left-1 top-2 flex items-center gap-3 text-[15px] text-cci-grey sm:left-12 ">
                    {budgetApproved && (
                      <Checkbox
                        theme="darkBlack"
                        onChange={() => {
                          expenditureHandler(item.id, item.cost);
                        }}
                        checked={ids.includes(item.id)}
                      />
                    )}
                    <p> {item.name}</p>
                  </div>
                </td>
                <td
                  className={
                    budgetApproved
                      ? 'min-w-[32%] border-r-2 border-cci-grey py-3'
                      : 'min-w-[40%] border-r-2 border-cci-grey py-3'
                  }
                >
                  <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                    NGN {item.cost}.00
                  </span>
                </td>
                {budgetApproved && (
                  <td className="flex   min-w-[30%] border-r-2 border-cci-grey py-3">
                    <div className="relative left-1 top-2 flex text-cci-grey sm:left-12">
                      <label htmlFor="image">
                        <input
                          id="image"
                          name="itemImage"
                          className="hidden w-full "
                          type="file"
                          onChange={(e) => {
                            imageUploadHandler(e, item.id);
                          }}
                          onClick={() => setCurrentItem(item.id)}
                        />

                        {currentItem === item.id ? (
                          <p className="w-full"> {file?.name}</p>
                        ) : (
                          <div className="relative left-1 top-2 flex items-center text-cci-grey sm:left-12">
                            <Icon
                              icon="akar-icons:plus"
                              className="relative text-[10px]  md:text-[17px]"
                            />
                            <div className="relative left-1 text-[10px] md:text-[17px]">
                              Upload JPEG/PDF
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10 flex items-center justify-between font-bold  ">
          <p>TOTAL</p>
          <p>NGN {totalPrice && totalPrice.toLocaleString()}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedUnitBudgetRequestTable;
