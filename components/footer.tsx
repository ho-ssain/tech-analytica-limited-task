import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
  propPadding?: CSSProperties["padding"];
};

const Footer: NextPage<FooterType> = ({ propDebugCommit, propPadding }) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const footerContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <footer
      className="self-stretch bg-base-black flex flex-col items-center justify-start py-20 px-5 box-border max-w-full text-left text-base text-base-white font-paragraph-p3-regular mq750:gap-[20px] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border"
      style={footerStyle}
    >
      <div className="w-[1140px] flex flex-row items-center justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div
          className="w-[210px] flex flex-col items-start justify-start gap-[16px]"
          style={footerContentStyle}
        >
          <img
            className="w-[185px] h-[51px] relative"
            alt=""
            src="/group-37623.svg"
          />
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="relative leading-[150%]">
              Got Question? Call us 24/7
            </div>
            <b className="relative text-lg leading-[150%] inline-block min-w-[125px] whitespace-nowrap">{`+02 055 4156 `}</b>
            <div className="relative leading-[150%]">
              <p className="m-0">{`Register now & get you 10%`}</p>
              <p className="m-0">offer from first order!</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl font-poppins">
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[18px] font-medium inline-block min-w-[74px] mq450:text-base mq450:leading-[14px]">
                Join US
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px]"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img
                className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px]"
                alt=""
                src="/link-1.svg"
              />
              <img
                className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px]"
                alt=""
                src="/link-2.svg"
              />
              <img
                className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px]"
                alt=""
                src="/link-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center pt-0 px-[86.5px] pb-[33px] box-border gap-[120px] max-w-full text-xl mq450:gap-[30px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq1050:gap-[60px] mq1050:pl-[43px] mq1050:pr-[43px] mq1050:box-border">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[150%] inline-block min-w-[94px] mq450:text-base mq450:leading-[24px]">
              Company
            </b>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="relative leading-[150%] inline-block min-w-[68px]">
                About us
              </div>
              <div className="relative leading-[150%] inline-block min-w-[51px]">
                Career
              </div>
              <div className="relative leading-[150%] inline-block min-w-[83px]">
                Contact us
              </div>
              <div className="relative leading-[150%] inline-block min-w-[92px]">
                Start Selling
              </div>
              <div className="relative leading-[150%] inline-block min-w-[102px]">
                Order History
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[150%] inline-block min-w-[118px] mq450:text-base mq450:leading-[24px]">
              My Account
            </b>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="relative leading-[150%] inline-block min-w-[118px]">
                Track My Order
              </div>
              <div className="relative leading-[150%] inline-block min-w-[75px]">
                View Cart
              </div>
              <div className="relative leading-[150%] inline-block min-w-[52px]">
                Sign In
              </div>
              <div className="relative leading-[150%] inline-block min-w-[35px]">
                Help
              </div>
              <div className="relative leading-[150%] inline-block min-w-[59px]">
                Wishlist
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[150%] mq450:text-base mq450:leading-[24px]">
              Customer Service
            </b>
            <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px] text-base">
              <div className="relative leading-[150%]">Payment Methods</div>
              <div className="relative leading-[150%]">Money Return Policy</div>
              <div className="relative leading-[150%] inline-block min-w-[114px]">
                Product Return
              </div>
              <div className="relative leading-[150%] inline-block min-w-[108px]">
                Contact Seller
              </div>
              <div className="relative leading-[150%]">{`Terms & Conditions`}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
