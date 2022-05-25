import { ErrorResponse } from "../../APIResponsesTypes";

export const Errors = ({ data }: { data: ErrorResponse }) => {
  const values = [];

  if (typeof data === "string") {
    return <p className="text-sm text-red-500 mt-1 my-5">{data}</p>;
  }

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
