type props = {
  title: string;
  action?: (e: React.MouseEvent) => void;
};
const ButtonContact = ({ title, action }: props) => {
  return (
    <>
      <button className="">{title}</button>
    </>
  );
};

export default ButtonContact;
