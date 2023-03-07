import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Button from "../atoms/Button";
import Cards from "../atoms/Cards";

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
  {
    image: "/images/container.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/container.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
  {
    image: "/images/container.jpg",
    caption: "Pelatihan kemandırian disabilitas rungu/Tuli bekerja",
  },
];

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "768px",
  width: "100%",
};

const CardSlider = () => {
  return (
    <div className="slide-container  ">
      <Slide>
        <div>
          <Cards image={List[0].image} caption={List[0].caption} />
        </div>
        {/* {List.map((e, i) => (
          <div key={i}>
            <Cards image={e.image} caption={e.caption} />
          </div>
        ))} */}
      </Slide>
    </div>
  );
};

export default CardSlider;
