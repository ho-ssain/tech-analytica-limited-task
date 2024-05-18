import type { NextPage } from "next";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx"; // To conditionally apply classes

const Nav: NextPage = () => {
  const router = useRouter();

  return (
    <header className="self-stretch h-[79px] shadow-[0px_4px_40px_rgba(0,_0,_0,_0.1)] bg-base-black flex flex-row items-start justify-center py-3.5 px-5 box-border gap-[329px] top-[0] z-[99] sticky text-left text-xs text-base-white font-paragraph-p3-regular lg:gap-[164px] mq750:gap-[82px] mq450:gap-[41px]">
      <div className="self-stretch w-[272px] flex flex-col items-start justify-start">
        <Link href="/">
          <img
            className="w-[185px] flex-1 relative max-h-full"
            loading="lazy"
            alt=""
            src="/group-37623.svg"
          />
        </Link>
      </div>
      <div className="w-[164px] flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <Link
              href="/"
              className={clsx(
                "relative leading-[20px] uppercase inline-block min-w-[82px] no-underline",
                {
                  "text-white": router.pathname !== "/",
                  "text-blue-300": router.pathname === "/",
                }
              )}
            >
              Products
            </Link>
            {router.pathname === "/" && (
              <div className="w-4 h-0.5 relative rounded bg-base-white" />
            )}
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <Link
              href="/cart"
              className={clsx(
                "relative leading-[20px] uppercase inline-block min-w-[42px] no-underline",
                {
                  "text-white": router.pathname !== "/cart",
                  "text-blue-300": router.pathname === "/cart",
                }
              )}
            >
              Cart
            </Link>
            {router.pathname === "/cart" && (
              <div className="w-4 h-0.5 relative rounded bg-base-white" />
            )}
          </div>
        </div>
      </div>
      <div className="w-[104px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <Button
          className="self-stretch h-[45px]"
          disableElevation={true}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "14",
            background: "#525ceb",
            borderRadius: "5px",
            "&:hover": { background: "#525ceb" },
            height: 45,
          }}
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default Nav;
