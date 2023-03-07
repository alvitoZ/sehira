type props = {
  title: string;
  placeholder: string;
  type: string;
};

export const Input = ({ title, placeholder, type }: props) => {
  return (
    <>
      <p className="">{title}</p>
      <input className="" type={type} placeholder={placeholder} />
    </>
  );
};
