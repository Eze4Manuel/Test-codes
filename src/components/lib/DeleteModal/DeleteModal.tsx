import { Icon } from '@iconify/react';
import type { FC } from 'react';
import React from 'react';

import type { DeleteModalProps } from './DeleteModal.props';

const DeleteModal: FC<DeleteModalProps> = ({
  deleteMemberFromList,
  setDeleteModal,
}) => {
  return (
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className=" fixed inset-0 flex items-center justify-center"
      onClick={() => setDeleteModal(false)}
    >
      <div className="h-[250px] w-[300px] rounded-lg bg-white p-6 text-center shadow-lg md:w-[400px]">
        <Icon
          icon="mdi:comment-warning-outline"
          className="mx-auto text-4xl text-cci-red"
        />
        <p className="mt-2  text-2xl font-bold">Warning</p>
        <p>Are you sure you want to delete this entry?</p>
        <hr className="mt-4" />
        <div className="mt-5 flex justify-between ">
          <p>CANCEL</p>
          <p
            onClick={deleteMemberFromList}
            className="cursor-pointer text-cci-red"
          >
            YES,DELETE
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
