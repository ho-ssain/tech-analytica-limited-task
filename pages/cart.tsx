import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

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

const Cart: NextPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeItemFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="w-full h-full relative bg-base-background-color overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[430.9px] box-border leading-[normal] tracking-[normal] mq1050:h-auto">
      <Nav />

      <div className="w-[444px] flex flex-col items-start justify-start pt-[135px] px-0 pb-0 box-border min-w-[444px] max-w-full text-xs text-base-white font-paragraph-p3-regular mq750:min-w-full mq450:pt-[88px] mq450:box-border mq1050:flex-1">
        <div className="self-stretch rounded-8xs box-border flex flex-col items-start justify-start py-[11px] px-[7px] gap-[24px] max-w-full border-[0.5px] border-solid border-base-black">
          <div className="self-stretch rounded-8xs bg-base-black flex flex-row items-start justify-center py-2.5 px-5 whitespace-nowrap">
            <b className="relative tracking-[2px] leading-[20px] uppercase">
              Selected Products
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-black mq450:flex-wrap mq450:gap-[20px]">
            {cart.map((item) => (
              <FrameComponent
                key={item.id}
                removeItemFromCart={removeItemFromCart}
                product={item}
              />
            ))}
          </div>

          <div className="self-stretch flex flex-row items-start justify-end text-base-black">
            <b className="relative tracking-[2px] leading-[20px] uppercase inline-block min-w-[80px]">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-black mq450:flex-wrap mq450:gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <input
                className="m-0 w-4 h-4 relative overflow-hidden shrink-0"
                type="checkbox"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[242px] max-w-full">
              <div className="self-stretch relative tracking-[2px] leading-[20px]">
                I've read and agree to the  
                <span className="[text-decoration:underline]">
                  terms and conditions,
                </span>
                  
                <span className="[text-decoration:underline]">{`refund policy &`}</span>
                 
                <span className="[text-decoration:underline]">
                  privacy policy
                </span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-base-black rounded-8xs flex flex-row items-start justify-start hover:bg-dimgray-200">
                  <b className="relative text-xs tracking-[2px] leading-[20px] uppercase inline-block font-paragraph-p3-regular text-base-white text-left min-w-[85px]">
                    Checkout
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
