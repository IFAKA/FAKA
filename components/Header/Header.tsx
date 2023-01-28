"use client";

import { isStyledAtom } from "@/store";
import { useAtom } from "jotai";
import { Eye, EyeClosed } from "phosphor-react";

const Header = () => {
  const [isStyled, setIsStyled] = useAtom(isStyledAtom);
  const handleChange = () => setIsStyled((crr) => !crr);
  return (
    <header className="relative flex items-center justify-center w-full max-w-5xl text-center">
      <h1 className="p-3 text-xl font-bold leading-4">FAKA</h1>
      <div className="absolute right-0 flex items-center mr-2">
        <button
          aria-label="Free the styles"
          onClick={handleChange}
          className={`${
            !isStyled && "animate-pulse bg-neutral-200 dark:bg-neutral-800"
          } flex flex-col justify-between h-full p-1 ml-2 border rounded-full cursor-pointer dark:border-none hover:bg-neutral-100 dark:hover:bg-neutral-800  `}
        >
          {isStyled ? <Eye size={16} /> : <EyeClosed size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
