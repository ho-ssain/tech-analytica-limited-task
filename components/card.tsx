import type { FC } from "react";

type Product = {
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

type CardProps = {
  product: Product;
  addToCart: (product: Product) => void;
};

const Card: FC<CardProps> = ({ product, addToCart }) => {
  return (
    <div className="h-[362px] w-[236px] rounded-bodur-radius bg-neutral-50 box-border shrink-0 flex flex-col items-start justify-center pt-0 px-0 pb-4 gap-[16px] text-left text-base text-base-black font-paragraph-p3-regular border-[0.5px] border-solid border-neutral-200">
      <img
        className="self-stretch flex-1 relative rounded-t-bodur-radius rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt={product.title}
        src={product.image}
      />
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[16px]">
        <div className="self-stretch relative leading-[150%]">
          {product.title}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-sm text-neutral-400">
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                <img
                  key={i}
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  loading="lazy"
                  alt="star"
                  src="/star.svg"
                />
              ))}
            </div>
            <div className="relative leading-[150%] inline-block min-w-[84px]">
              ({product.rating.count} Review{product.rating.count > 1 && "s"})
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg text-negative-base">
            <b className="relative leading-[150%] inline-block min-w-[56px] whitespace-nowrap">
              ${product.price.toFixed(2)}
            </b>
            <button
              className="cursor-pointer [border:none] py-1.5 px-2.5 bg-base-black rounded-bodur-radius1 flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-200"
              onClick={() => addToCart(product)}
            >
              <div className="relative text-base leading-[150%] font-paragraph-p3-regular text-base-background-color text-left inline-block min-w-[92px]">
                Add To Cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
