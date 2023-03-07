type props = {
  title: string;
  placeholder: string;
};

export const TextArea = ({ title, placeholder }: props) => {
  return (
    <>
      <p className="">{title}</p>
      <textarea cols={52} rows={4} placeholder={placeholder}></textarea>
    </>
  );
};
