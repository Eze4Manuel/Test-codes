import type { FC } from 'react';
import React from 'react';

import Button from '../Button';
import type { CheckOutRequestProps } from './CheckOutRequest.props';

const CheckOutRequest: FC<CheckOutRequestProps> = ({
  setCheckoutRequestModal,
}) => {
  const handleClick = () => {};
  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className=" fixed inset-0 flex items-center justify-center"
      onClick={() => setCheckoutRequestModal(false)}
    >
      <div className="h-[250px] w-[300px] rounded-lg bg-white p-7 text-center shadow-lg md:w-[400px]">
        <h1 className="text-3xl font-bold ">Checkout-out Request</h1>
        <p>
          Use this code <span className="mt-2 text-cci-green">563KIT</span> to
          check out your ward
        </p>
        <div className="mt-6 flex  items-center justify-between">
          <hr className="w-[40%]" />
          <p>OR</p>
          <hr className="w-[40%]" />
        </div>
        <div className="mt-10 w-full ">
          <Button
            size="large"
            variant="solid"
            className=" w-full"
            onClick={handleClick}
          >
            Accept Check-Out Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutRequest;
