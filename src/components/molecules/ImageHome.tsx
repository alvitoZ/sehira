import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import Button from "../atoms/Button";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

const slideImages = [
  {
    url: "/images/container.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/container.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
  {
    url: "/images/container.jpg",
    caption: "SEHJIRA Deaf Foundation",
    desc: "Yayasan SEHJIRA (Sehat Jiwa Raga) merupakan yayasan yang menaungi dan memberikan perlindungan bagi para penyandang disabilitas khususnya disabilitas rungu/Tuli.",
  },
];

const ImageHome = () => {
  return (
    <div className="slide-container  ">
      <Slide duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="
            flex 
            flex-col"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="flex flex-col ">
                <div>
                  <h1 className=" text-3xl md:text-5xl bg-gradient-to-r from-[#A03c78] to-purple-400 bg-clip-text text-transparent ml-20 mt-60 w-[53%] blinking-cursor font-extrabold ">
                    {" "}
                    {slideImage.caption}{" "}
                  </h1>
                  <p className=" mt-5 w-2/6 md:w-2/6 text-white ml-20">
                    {slideImage.desc}
                  </p>
                </div>
                <div className=" self-start justify-self-start  bg-white rounded-full  ml-16 mt-5 h-14 flex border-black border-4 text-[#843C74] font-bold    ">
                  <Button
                    style=" items-center justify-center flex  "
                    title="PELAJARI LEBIH LANJUT"
                  />
                  <span className="pt-3 pl-3 text-[29px]">????</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
      <div className=" flex flex-col justify-center fixed mt-52 top-16   ">
        <Link href="www.facebook.com">
          <Image
            src="/static/svgs/Facebook.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.twitter.com">
          <Image
            src="/static/svgs/Twitter.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.instagram.com">
          <Image
            src="/static/svgs/Instagram.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.linkedin.com">
          <Image
            src="/static/svgs/Linkedin.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
        <Link href="www.youtube.com">
          <Image
            src="/static/svgs/YouTube.svg"
            alt="image"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

export default ImageHome;
