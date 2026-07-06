// import { useRouteError } from "react-router-dom";

const Error = () => {
  // const err = useRouteError();
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Somwthing went wrong</h2>
      {/* <h2>
        {err.status}: {err.statusText}
      </h2>
      <h2>{err?.error?.message}</h2> */}
    </div>
  );
};

export default Error;
