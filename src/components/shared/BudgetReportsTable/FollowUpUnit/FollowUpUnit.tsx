import { Icon } from '@iconify/react';

const FollowUpUnitBudgetTable = () => {
  return (
    <>
      <section className="mt-[70px] w-full">
        <table className=" block overflow-x-scroll md:overflow-x-hidden">
          <thead className=" block w-full">
            <tr className="flex border-b border-cci-grey font-bold">
              <td className="min-w-[6%] border-r-2 border-cci-grey py-3 text-left">
                SN
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 sm:left-12">Item Name</span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 sm:left-12 ">
                  Cost of Item
                </span>
              </td>
              <td className="min-w-[30%] py-3 ">
                <span className="relative left-1 sm:left-12 ">
                  Proof of Payment
                </span>
              </td>
            </tr>
          </thead>
          <tbody className="block w-full">
            <tr className=" flex h-[70px] border-b border-cci-grey">
              <td className="min-w-[6%] border-r-2 border-cci-grey py-3 text-left">
                <span className="relative top-2 text-cci-grey">1</span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  Petrol
                </span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  NGN50,000
                </span>
              </td>
              <td className="min-w-[30%] py-3">
                <div className="relative left-1 flex w-[130px] rounded-lg border border-cci-grey bg-white py-[10px] px-2 sm:left-12 sm:w-[170px]">
                  <Icon icon="eos-icons:system-image-outlined" />
                  <div className="relative bottom-[2px] left-5 text-[14px]">
                    img 001.jpg
                  </div>
                </div>
              </td>
            </tr>
            <tr className=" flex h-[70px] border-b border-cci-grey">
              <td className="min-w-[6%] border-r-2 border-cci-grey py-3 text-left">
                <span className="relative top-2 text-cci-grey">2</span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  Diesel
                </span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  NGN70,000
                </span>
              </td>
              <td className="min-w-[30%] py-3">
                <div className="relative left-1 flex w-[130px] rounded-lg border border-cci-grey bg-white py-[10px] px-2 sm:left-12 sm:w-[170px]">
                  <Icon icon="eos-icons:system-image-outlined" />
                  <div className="relative bottom-[2px] left-5 text-[14px]">
                    img 001.jpg
                  </div>
                </div>
              </td>
            </tr>
            <tr className=" flex h-[70px] border-b border-cci-grey">
              <td className="min-w-[6%] border-r-2 border-cci-grey py-3 text-left">
                <span className="relative top-2 text-cci-grey">3</span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  SMS Charges
                </span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 top-2 text-[15px] text-cci-grey sm:left-12">
                  NGN15,000
                </span>
              </td>
              <td className="min-w-[30%] py-3">
                <div className="relative left-1 top-2 flex text-cci-grey sm:left-12">
                  <Icon
                    icon="akar-icons:plus"
                    className="relative top-1 text-[17px]"
                  />
                  <div className="relative left-1 text-[17px]">
                    Upload JPEG/PDF
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

          <tbody className="block w-full">
            <tr className=" flex h-[70px] border-b border-cci-grey">
              <td className="min-w-[6%] border-r-2 border-cci-grey py-3 text-left"></td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3 ">
                <span className="relative left-1 text-sm font-bold text-cci-black sm:left-12 sm:text-xl">
                  Total
                </span>
              </td>
              <td className="min-w-[32%] border-r-2 border-cci-grey py-3">
                <span className="relative left-1 text-sm font-bold text-cci-black sm:left-12 sm:text-xl">
                  NGN126,000
                </span>
              </td>
              <td className="min-w-[30%] py-3"></td>
            </tr>
          </tbody>
        </table>
        <div className="border-cci-grey-light float-none mt-6 flex h-[60px] w-[250px] rounded-lg border-2 text-cci-grey sm:float-right">
          <span className="relative top-4 px-6">Previous</span>
          <div className="bg-cci-black px-5 text-white">
            <span className="relative top-4">1</span>
          </div>
          <span className="relative top-4 px-6">Next</span>
        </div>
      </section>
    </>
  );
};

export default FollowUpUnitBudgetTable;
