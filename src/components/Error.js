import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);
  return (
    <>
      <h1>Opps something went wrong</h1>
      <h2>{status + " : " + statusText}</h2>
    </>
  );
};

export default Error;
