import type { FC } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const UnitBudgetRequestTable: FC = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      itemName: '',
      itemPrice: '',
    },
  ]);
  // const [fileName, setFileName] = useState('');

  // adds new entry  to the table
  const handleAddFields = () => {
    setInputFields((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          itemName: '',
          itemPrice: '',
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
    return accumulator + parseInt(object.itemPrice, 10);
  }, 0);

  // check if total price is a number or not
  const isNotNumber = Number.isNaN(totalPrice);

  return (
    <div className="mt-12 w-full lg:mt-14">
      <table className="block border-collapse overflow-x-scroll border border-[#686868]  md:overflow-x-hidden">
        <thead className="block w-full">
          <tr className="flex h-[40px] whitespace-nowrap text-xs font-[500] md:grid md:grid-cols-3 ">
            <th className="my-auto  min-w-[10%]  px-4 text-left">S/N</th>
            <th className="my-auto min-w-[40%] px-4 text-left">Item Name</th>
            <th className="my-auto min-w-[40%] px-4 text-left">Item Price</th>
          </tr>
        </thead>
        <tbody className="block w-full">
          {inputFields.map((item, index) => (
            <tr
              key={index}
              className="flex text-sm font-[500]  text-cci-grey-dim md:grid  md:grid-cols-3"
            >
              <td className="min-w-[10%] border border-[#68686880] px-2 py-1 text-left">
                {index + 1}
              </td>
              <td className="min-w-[40%] border border-[#68686880] px-2 py-1 text-left">
                <input
                  className="h-full w-full bg-transparent outline-none"
                  value={item.itemName}
                  name="itemName"
                  onChange={(event) => handleChangeInput(item.id, event)}
                />
              </td>
              <td className="min-w-[40%] border border-[#68686880] px-2 py-1 text-left">
                <input
                  className="h-full w-full border-none bg-transparent outline-none"
                  type="number"
                  value={item.itemPrice}
                  name="itemPrice"
                  onChange={(event) => handleChangeInput(item.id, event)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10 flex items-center justify-between font-bold md:w-[40%] ">
        <p>TOTAL</p>
        {isNotNumber ? (
          <p>NGN 0.00</p>
        ) : (
          <p>NGN {totalPrice.toLocaleString()}.00</p>
        )}
      </div>

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
          >
            Send Budget for approval
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnitBudgetRequestTable;
