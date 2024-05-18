import type { NextPage } from "next";

const Pagination: NextPage = () => {
  return (
    <div className="self-stretch rounded-t-none rounded-b-md overflow-hidden flex flex-row items-start justify-end pt-[15.5px] px-[30px] pb-[16.5px] text-center text-sm text-base-black1 font-open-sans">
      <div className="flex flex-row items-start justify-start gap-[23.4px] mq450:flex-wrap">
        <div className="w-12 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/back.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/left-arrow.svg"
            />
          </div>
        </div>
        <div className="w-7 rounded bg-primary-base flex flex-row items-start justify-start py-[5px] px-[9px] box-border text-base-white">
          <div className="relative tracking-[0.02em] leading-[137.1%] font-semibold inline-block min-w-[9px]">
            1
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative tracking-[0.02em] leading-[137.1%] font-semibold inline-block min-w-[9px]">
            2
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative tracking-[0.02em] leading-[137.1%] font-semibold inline-block min-w-[9px]">
            3
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative tracking-[0.02em] leading-[137.1%] font-semibold inline-block min-w-[9px]">
            4
          </div>
        </div>
        <div className="w-[17px] relative tracking-[0.18em] leading-[137.1%] font-semibold text-black-60 hidden">
          ...
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative tracking-[0.02em] leading-[137.1%] font-semibold inline-block min-w-[17px]">
            22
          </div>
        </div>
        <div className="w-12 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/right-arrow.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
              alt=""
              src="/back-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
