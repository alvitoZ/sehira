import * as React from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Button from "../atoms/Button";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

type ProgramList = {
  image: string;
  caption: string;
  desc?: string;
};

type Props = ProgramList;

const Cards = (props: Props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center w-64">
        <Image
          src={props.image}
          alt={"vector.png"}
          width={350}
          height={220}
        ></Image>
        {props.caption}
      </div>
    </>
  );
};

export default Cards;
