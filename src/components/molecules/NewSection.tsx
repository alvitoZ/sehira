import React from "react";
import Image from "next/image";

const NewHome = () => {
  return (
    <div className="px-6">
      <h1 className="text-center text-[48px] pb-16 pt-8 font-bold text-[#843C74]">
        Visi Misi Sehjira
      </h1>
      <div className="flex justify-around flex-wrap">
        <Image
          alt="education for all"
          width={750}
          height={500}
          src="/images/container.jpg"
        />
        <div className="flex justify-center gap-[5%] flex-col">
          <div className="w-[350px]">
            <h3 className="pb-5 font-bold text-[#843C74]">Visi</h3>
            <p>
              pemberdayaaan disabilitas rungu/Tuli guna terwujudnya individu
              yang tangguh dan mandiri serta ikut berpartisipasi dalam
              pembangunan Indonesia inklusif.
            </p>
          </div>
          <div className="w-[350px]">
            <h3 className="pb-5 font-bold text-[#843C74]">Misi</h3>
            <p className="">
              Membantu disabilitas rungu/Tuli dengan pemberian advokasi atau
              perlindungan terutama menjembatani penyandang disabilitas dengan
              organisasi kemitraan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
