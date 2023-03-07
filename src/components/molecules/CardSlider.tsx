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
];

const CardSlider = () => {
  return (
    <div className="flex justify-around">
      {List.map((e, i) => {
        return <Cards key={i} image={e.image} caption={e.caption} />;
      })}
    </div>
  );
};

export default CardSlider;
