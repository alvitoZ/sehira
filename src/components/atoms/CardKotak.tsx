import React from "react";
import Image from "next/image";

interface CardKotak {
  image: string;
  caption?: string;
  title?: string;
  action?: (e: React.MouseEvent) => void;
}

const CardKotak = () => {
  return (
    <div className="w-[22rem] rounded-[20px] shadow-[2px_6px_6px_rgba(0,0,0,0.25)]">
      <Image
        className="rounded-t-[20px]"
        src="/images/container.jpg"
        alt="da"
        width={364}
        height={252}
      />
      <div className="p-2">
        <h3 className="py-4 font-bold text-[28px]">First Article</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="p-2 w-auto pt-4">
          <div className="h-14 flex justify-center items-center">
            <div>
              <span className="font-semibold text-[#843C74]">Readmore </span>
              <span className="rounded-full bg-[#843C74] text-[#FFFFFF]">
                🡲
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKotak;
