export const Errors = ({ data }: { data: { [key: string]: string } }) => {
  const values = [];

  for (const error in data) {
    values.push(data[error]);
  }

  return (
    <>
      {values.map((value, index) => (
        <p key={index} className="text-sm text-red-500 mt-1 my-5">
          {value}{" "}
        </p>
      ))}
    </>
  );
};
