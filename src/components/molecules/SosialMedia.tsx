import React from "react";
import Link from "next/link";
import Image from "next/image";

const SosialMedia = () => {
  return (
    <div>
      <div className=" flex flex-wrap justify-center mt-14 font-extrabold text-3x1 text-[#A03C78]">
        Sosial Media Kami
      </div>
      <div className=" flex flex-wrap justify-center p-14 gap-3">
        <Link href="www.facebook.com">
          <Image
            src="/static/svgs/Facebook.svg"
            alt="image"
            width={100}
            height={100}
          />
        </Link>
        <Link href="www.twitter.com">
          <Image
            src="/static/svgs/Twitter.svg"
            alt="image"
            width={100}
            height={100}
          />
        </Link>
        <Link href="www.instagram.com">
          <Image
            src="/static/svgs/Instagram.svg"
            alt="image"
            width={100}
            height={100}
          />
        </Link>
        <Link href="www.linkedin.com">
          <Image
            src="/static/svgs/Linkedin.svg"
            alt="image"
            width={100}
            height={100}
          />
        </Link>
        <Link href="www.youtube.com">
          <Image
            src="/static/svgs/Youtube.svg"
            alt="image"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default SosialMedia;
