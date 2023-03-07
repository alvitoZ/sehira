import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Section from "@/components/molecules/Section";
import ImageHome from "@/components/molecules/ImageHome";
import ProgramList from "@/components/molecules/ProgramList";
import DarkModeToggle from "@/components/molecules/DarkModeToggle";
import GaleriKami from "@/components/molecules/GaleriKami";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Faizmul"
      />

      <ImageHome />
      {/* <ProgramList /> */}

      <GaleriKami />
    </BlankTemplate>
  );
};

export default index;

// export async function getStaticProps (){
//   const data = await axios.get("http://localhost:8080/v1/articles")
//   return {
//     props:{
//       data:data.data
//     }
//   }

// }
