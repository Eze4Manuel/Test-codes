import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { createBudgetRequest } from '@/services/budgetrequest';
import { processResponse } from '@/utils/response/processResponse';

import Button from '../Button';
import type { UnitBudgetRequestTableProps } from './UnitBudgetRequestTable.props';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const UnitBudgetRequestTable: FC<UnitBudgetRequestTableProps> = ({
  startDate,
  endDate,
  toggleTableType,
}) => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      name: '',
      cost: '',
    },
  ]);

  const { mutate, isLoading } = useMutation(createBudgetRequest, {
    onSuccess(response) {
      const data = processResponse(response);
      if (data) {
        toast.success('Budget requested successfully!');
      }
    },
  });

  // adds new entry  to the table
  const handleAddFields = () => {
    setInputFields((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          name: '',
          cost: '',
        },
      ];
    });
  };

  // handles the value change for the inputs
  const handleChangeInput = (id: string, event: InputEvent) => {
    const newInputFields = inputFields.map((item: any) => {
      if (id === item.id) {
        // when the value is text or number
        item[event.target.name] = event.target.value;
      }

      return item;
    });
    setInputFields(newInputFields);
  };

  // get total of the items price
  const totalPrice = inputFields.reduce((accumulator, object) => {
    return accumulator + parseInt(object.cost, 10);
  }, 0);

  // check if total price is a number or not
  const isNotNumber = Number.isNaN(totalPrice);

  const handleSubmit = useCallback(() => {
    if (startDate === '' || endDate === '') {
      toast.error('Please specify a start and end date');
    } else {
      mutate({
        start: startDate,
        campus: '3cece26c-e6c2-485a-9caa-9432be17b4be',
        unit: 'FOLLOW_UP_UNIT',
        end: endDate,
        items: inputFields,
      });
    }
  }, []);
  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className=" block overflow-x-scroll md:overflow-x-hidden">
        <thead className=" block w-full">
          <tr className="flex border-b border-cci-grey font-bold">
            <td className="min-w-[16%] border-r-2 border-cci-grey py-3 text-left">
              SN
            </td>
            <td className="min-w-[42%] border-r-2 border-cci-grey py-3 ">
              <span className="relative left-1 sm:left-12">Item Name</span>
            </td>
            <td className="min-w-[42%] border-r-2 border-cci-grey py-3 ">
              <span className="relative left-1 sm:left-12 ">Cost of Item</span>
            </td>
          </tr>
        </thead>
        <tbody className="block w-full">
          {inputFields.map((item, index) => (
            <tr key={index} className="flex h-[70px] border-b border-cci-grey">
              <td className="min-w-[16%] border-r-2 border-cci-grey py-3 text-left">
                <span className="relative top-2 text-cci-grey">
                  {index + 1}
                </span>
              </td>
              <td className="min-w-[42%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  <input
                    className="h-full w-full bg-transparent outline-none"
                    value={item.name}
                    name="name"
                    onChange={(event) => handleChangeInput(item.id, event)}
                  />
                </span>
              </td>
              <td className="min-w-[42%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  <input
                    className="h-full w-full border-none bg-transparent outline-none"
                    type="number"
                    value={item.cost}
                    name="cost"
                    onChange={(event) => handleChangeInput(item.id, event)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody className="block w-full">
          <tr className=" flex h-[70px] border-b border-cci-grey">
            <td className="min-w-[16%] border-r-2 border-cci-grey py-3 text-left"></td>
            <td className="min-w-[42%] border-r-2 border-cci-grey py-3 ">
              <span className="relative left-1 text-sm font-bold text-cci-black sm:left-12 sm:text-xl">
                Total
              </span>
            </td>
            <td className="min-w-[42%] border-r-2 border-cci-grey py-3">
              <span className="relative left-1 text-sm font-bold text-cci-black sm:left-12 sm:text-xl">
                {isNotNumber ? (
                  <p>NGN 0.00</p>
                ) : (
                  <p>NGN {totalPrice.toLocaleString()}.00</p>
                )}
              </span>
            </td>
            <td className="min-w-[30%] py-3"></td>
          </tr>
        </tbody>
      </table>

      <p
        className=" mt-4 cursor-pointer text-right font-bold text-cci-green"
        onClick={toggleTableType}
      >
        Check a request
      </p>

      <div>
        <p
          className="mt-3 cursor-pointer font-bold text-cci-green"
          onClick={handleAddFields}
        >
          + Add Entry
        </p>

        <div className="mt-6 w-full md:w-[30%]   ">
          <Button
            size="large"
            disabled={!!isNotNumber}
            variant="solid"
            className=" w-full "
            onClick={handleSubmit}
            loading={isLoading}
          >
            Send Budget for approval
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnitBudgetRequestTable;
