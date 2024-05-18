import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivRowGap?: CSSProperties["rowGap"];
  frameDivMinWidth1?: CSSProperties["minWidth"];
  checkoutContentFlexWrap?: CSSProperties["flexWrap"];
  iveReadAndContainerMinWidth?: CSSProperties["minWidth"];
  product?: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  removeItemFromCart?(id?: number): void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  frameDivFlex,
  frameDivAlignSelf,
  frameDivMinWidth,
  frameDivRowGap,
  frameDivMinWidth1,
  checkoutContentFlexWrap,
  iveReadAndContainerMinWidth,
  product,
  removeItemFromCart,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
      rowGap: frameDivRowGap,
    };
  }, [frameDivMinWidth, frameDivRowGap]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth1,
    };
  }, [frameDivMinWidth1]);

  const checkoutContentStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: checkoutContentFlexWrap,
    };
  }, [checkoutContentFlexWrap]);

  const iveReadAndContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: iveReadAndContainerMinWidth,
    };
  }, [iveReadAndContainerMinWidth]);

  return (
    <div
      className="flex-1 rounded-8xs box-border flex flex-col items-center justify-center py-[11px] px-[7px] gap-[24px] max-w-full text-left text-xs text-base-black font-paragraph-p3-regular border-[0.5px] border-solid border-base-black"
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center max-w-full text-base">
        <div className="flex-1 rounded-bodur-radius bg-neutral-50 box-border flex flex-row items-center justify-center max-w-full [row-gap:20px] border-[0.5px] border-solid border-neutral-200 mq1050:flex-wrap">
          <img
            className="self-stretch flex-1 relative rounded-t-bodur-radius rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt={product?.title}
            src={product?.image}
          />
          <div
            className="flex-1 flex flex-row items-center justify-center py-0 pr-2 pl-4 box-border min-w-[285px] max-w-full [row-gap:20px] mq450:flex-wrap"
            style={frameDiv1Style}
          >
            <div
              className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-[34px] box-border gap-[16px] min-w-[254px] max-w-full"
              style={frameDiv2Style}
            >
              <div className="self-stretch relative leading-[150%]">
                {product?.title}
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-sm text-neutral-400">
                <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[295px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                    {[...Array(Math.round(product?.rating?.rate ?? 0))].map(
                      (_, i) => (
                        <img
                          key={i}
                          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                          loading="lazy"
                          alt="star"
                          src="/star.svg"
                        />
                      )
                    )}
                  </div>
                  <div className="relative leading-[150%] inline-block min-w-[84px]">
                    ({product?.rating.count} Review
                    {product?.rating.count && product.rating.count > 1 && "s"})
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start text-lg text-negative-base">
                  <b className="relative leading-[150%] inline-block min-w-[56px] whitespace-nowrap">
                    ${product?.price.toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeItemFromCart?.(product?.id)}
              className="cursor-pointer"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/trash.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
