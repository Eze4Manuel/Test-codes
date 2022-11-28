import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

import Button from '../Button';
import DeleteModal from '../DeleteModal';
import Pagination from '../Pagination';
import Table from '../Table';
import TableBody from '../Table/TableBody';
import TableCell from '../Table/TableCell';
import TableHeader from '../Table/TableHeader';
import TableRow from '../Table/TableRow';
import Text from '../Text';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const UploadExel = () => {
  const [item, setItem] = useState<any>([]);
  const [fileItem, setFileItem] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentItemNumber, setCurrentItemNumber] = useState();

  const limit = 20;
  const page = 1;
  const pages = 1;
  // thus function is responsible for reading and parsing the excel data, for it to be rendered on th ui...no chnage am ooo, i no go remember later oooo
  const readExcel = (file: File | undefined) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file as Blob);

      fileReader.onload = (e) => {
        const bufferArray = e?.target?.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });

        const wsname = wb?.SheetNames[0];
        const ws = wb.Sheets[wsname!];

        const data = XLSX.utils.sheet_to_json(ws!);

        resolve(data);

        fileReader.onerror = (error) => {
          reject(error);
        };

        promise.then((d) => {
          setItem(d);
          setFileItem(true);
        });
      };
    });
  };

  const deleteMemberFromList = () => {
    item.splice(
      item.findIndex((i: any) => i.no === currentItemNumber),
      1
    );
    setDeleteModal(false);
  };

  const handleSubmit = () => {};

  return (
    <>
      {fileItem ? (
        <div className="grid w-full gap-10">
          <div className="flex w-full flex-col gap-3 overflow-x-hidden">
            <Table>
              <TableHeader
                items={[
                  'SN',
                  'Full Name',
                  'Gender',
                  'Date of Birth',
                  'Phone Number',
                  'Email Address',
                  'CCI campus',
                  'Map group',
                  'Membership class',
                  'Service unit',
                  'Action',
                ]}
              />
              <TableBody>
                {item &&
                  item.map((it: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{index + (page - 1) * limit + 1}</TableCell>
                      <TableCell>
                        <Text variant="caption">{it?.fullname}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it?.gender}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it?.dob}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.no}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.email}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.ccicampus}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.map_group}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.membership_class}</Text>
                      </TableCell>
                      <TableCell>
                        <Text variant="caption">{it.service_unit}</Text>
                      </TableCell>
                      <TableCell>
                        <Icon
                          icon="mdi:bin"
                          className="cursor-pointer text-2xl text-cci-red"
                          onClick={() => {
                            setDeleteModal(true);
                            setCurrentItemNumber(it.no);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {deleteModal && (
              <DeleteModal
                deleteMemberFromList={deleteMemberFromList}
                setDeleteModal={setDeleteModal}
              />
            )}

            <div className="flex flex-wrap items-center justify-between gap-5">
              <Text variant="caption">
                Showing {(page - 1) * limit + 1} to {limit * page} of{' '}
                {item?.length} entries
              </Text>
              <Pagination count={pages} page={page} setPage={() => {}} />
            </div>
            <div className="items-center justify-center gap-4  md:flex lg:flex-col xl:flex-row ">
              <Button
                size="large"
                onClick={handleSubmit}
                // loading={isLoading}
                className="mb-2 flex w-full items-center gap-2 md:w-auto  "
              >
                Send Profile Link via SMS
              </Button>
              <Button
                size="large"
                onClick={handleSubmit}
                // loading={isLoading}
                className="mb-2 flex w-full items-center gap-2 md:w-auto  "
              >
                Send Profile Link via E-Mail
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <div className="my-16 flex h-[200px] w-[150px]  flex-col items-center justify-center rounded-sm bg-[#f4f4f4]">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-cci-grey-dim2">
              <Icon
                icon="akar-icons:plus"
                className="cursor-pointer text-lg text-black"
              />
            </div>
            <label htmlFor="image">
              <input
                id="image"
                name="itemImage"
                className="hidden"
                type="file"
                onChange={(e: InputEvent) => {
                  if (!e.target.files) return;
                  const file = e.target?.files[0];
                  readExcel(file);
                }}
              />
              <p className="mt-4 cursor-pointer">IMPORT DATA</p>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadExel;
