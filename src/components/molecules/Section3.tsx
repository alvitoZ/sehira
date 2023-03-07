import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardSlider from "./CardSlider";

import Image from "next/image";

const Section3 = () => {
  const ProgramList = [
    {
      image: "/images/container.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
      image: "/images/container.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
      image: "/images/container.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
  ];

  return (
    <div className="">
      <CardSlider />
    </div>
  );
};

export default Section3;
