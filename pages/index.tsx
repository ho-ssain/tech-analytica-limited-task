import type { GetStaticProps, NextPage } from "next";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Nav from "../components/nav";
import Card from "../components/card";
import Pagination from "../components/pagination";
import Footer from "../components/footer";
import FrameComponent from "../components/frame-component";

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

type ProductProps = {
  products: Product[];
};

const Product: NextPage<ProductProps> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [layout, setLayout] = useState<"one-column" | "three-columns">(
    "three-columns"
  );

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart items to localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeItemFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleIconClick = () => {
    setLayout("three-columns");
  };

  const handleIcon1Click = () => {
    setLayout("one-column");
  };

  return (
    <div className="w-full relative bg-base-background-color overflow-hidden flex flex-col items-start justify-start gap-10 leading-normal tracking-normal">
      <Nav />
      <div className="w-[444px] h-[106px] relative bg-base-background-color overflow-hidden shrink-0 hidden max-w-full" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-2xl text-base-black1 font-open-sans">
        <div className="w-[1200px] flex flex-row items-start justify-center gap-6 max-w-full flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-12 min-w-[476px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full gap-5 flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start min-w-[434px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-6 font-semibold font-inherit inline-block max-w-full">
                    Our All Products
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start gap-4">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    loading="lazy"
                    alt="Grid view"
                    src="/icon.svg"
                    onClick={handleIconClick}
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    alt="List view"
                    src="/icon-1.svg"
                    onClick={handleIcon1Click}
                  />
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-10 font-oxygen text-base text-dimgray-100"
                placeholder="Search An Item"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <img
                      width="14.3px"
                      height="14.3px"
                      src="/group.svg"
                      alt="group"
                    />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#49525a" },
                  "& .MuiInputBase-root": {
                    height: "38.3px",
                    paddingLeft: "15px",
                    borderRadius: "50px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "15px",
                    color: "#5f5f5f",
                  },
                }}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
              <div
                className={`grid w-full ${
                  layout === "three-columns" ? "grid-cols-3" : "grid-cols-1"
                } gap-6`}
              >
                {products.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
              <Pagination />
            </div>
          </div>
          <div className="w-[444px] flex flex-col items-start justify-start pt-32 px-0 pb-0 box-border min-w-[444px] max-w-full text-xs text-base-white font-paragraph-p3-regular">
            <div className="self-stretch rounded-8xs box-border flex flex-col items-start justify-start py-3 px-2 gap-6 max-w-full border border-solid border-base-black">
              <div className="self-stretch rounded-8xs bg-base-black flex flex-row items-start justify-center py-2.5 px-5 whitespace-nowrap">
                <b className="relative tracking-[2px] leading-[20px] uppercase">
                  Selected Products
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-black">
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
                  {cart
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full text-black">
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <input
                    className="m-0 w-4 h-4 relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[242px] max-w-full">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

// Fetch data at build time
export const getStaticProps: GetStaticProps<ProductProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Product;
