import { Icon } from '@iconify/react';
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
      itemImage: '',
    },
  ]);
  const [fileName, setFileName] = useState('');

  // adds new entry  to the table
  const handleAddFields = () => {
    setInputFields((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          itemName: '',
          itemPrice: '',
          itemImage: '',
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
        // when the value is image or file
        const file = event.target?.files;
        if (file) {
          item[event.target.name] = file[0]!.name;
          setFileName(file[0]!.name);
        }
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
          <tr className="flex h-[40px] whitespace-nowrap text-xs font-[500] md:grid md:grid-cols-4 ">
            <th className="my-auto  min-w-[10%]  px-4 text-left">S/N</th>
            <th className="my-auto min-w-[23%] px-4 text-left">Item Name</th>
            <th className="my-auto min-w-[23%] px-4 text-left">Item Price</th>
            <th className="my-auto min-w-[23%] px-4 text-left">
              Proof of Payment
            </th>
          </tr>
        </thead>
        <tbody className="block w-full">
          {inputFields.map((item, index) => (
            <tr
              key={index}
              className="flex text-sm font-[500]  text-cci-grey-dim md:grid  md:grid-cols-4"
            >
              <td className="min-w-[10%] border border-[#68686880] px-2 py-1 text-left">
                {index + 1}
              </td>
              <td className="min-w-[30%] border border-[#68686880] px-2 py-1 text-left">
                <input
                  className="h-full w-full bg-transparent outline-none"
                  value={item.itemName}
                  name="itemName"
                  onChange={(event) => handleChangeInput(item.id, event)}
                />
              </td>
              <td className="min-w-[30%] border border-[#68686880] px-2 py-1 text-left">
                <input
                  className="h-full w-full border-none bg-transparent outline-none"
                  type="number"
                  value={item.itemPrice}
                  name="itemPrice"
                  onChange={(event) => handleChangeInput(item.id, event)}
                />
              </td>
              <td className="grid min-w-[30%] place-items-center border border-[#68686880] px-2 py-1  text-left">
                <label htmlFor="image">
                  <input
                    id="image"
                    name="itemImage"
                    className="hidden"
                    type="file"
                    onChange={(event) => handleChangeInput(item.id, event)}
                  />
                  {fileName === '' ? (
                    <div className="flex cursor-pointer items-center gap-2">
                      <Icon icon="carbon:add" className="text-2xl" />
                      <p className=" text-xs">Upload JPEG/PDF</p>
                    </div>
                  ) : (
                    <p className="text-xs">{fileName} </p>
                  )}
                </label>
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
