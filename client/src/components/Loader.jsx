import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "25px",
        height: "25px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
}
