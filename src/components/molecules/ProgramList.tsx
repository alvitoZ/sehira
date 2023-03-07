import Button from "../atoms/Button";
import Cards from "../atoms/Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";

const List = [
  {
    image: "/images/container.jpg",
    caption: "Pelatihan manajemen organısası bagı pengurus dan anggota SEHJIRA",
  },
  {
    image: "/images/container.jpg",
    caption: "Kelas Kursus Komputer tingkat dasar dan Mahir",
  },
  {
    image: "/images/container.jpg",
    caption: "Kelas bahasa Isyarat Bisindo dan ASL/ISL",
  },
  {
    image: "/images/container.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
];

const ProgramList = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-10 gap-5  ">
      <div className=" text-center text-[24px] text-[#843C74] pb-5">
        <h1>Program Unggulan SEHJIRA</h1>
      </div>
      <div className=" flex flex-wrap items-center justify-center gap-5">
        {List.map((e, i) => {
          return <Cards key={i} image={e.image} caption={e.caption} />;
        })}
      </div>
      <div className="ml-5  text-[#843C74] w-auto rounded mt-5 mb-14 h-14 text-[24px] font-extrabold ">
        <Button style="p-4 pb-20 " title="Lihat Semua Program Unggulan" />
      </div>
    </div>
  );
};

export default ProgramList;
