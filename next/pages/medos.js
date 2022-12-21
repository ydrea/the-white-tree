import { parseCookies } from "nookies";
import Form from "../components/Form";
import { API_URL } from "../utils/urls";
//
//
export async function getServerSideProps(context) {
  // //

  const { params } = context;
  console.log("PARAMS:", params);
  //
  const jwt = parseCookies(context).jwt;

  const res = await fetch(`${API_URL}/medos/`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  console.log(res);
  const items = await res.json();
  console.log(items);
  return {
    props: {
      items: { 1: "alo" },
      // authData: loginRes,
    },
  };
}
//
function medos({ items }) {
  console.log(items);
  return (
    <div>
      <h3>medos</h3>
      <span> </span>
      <Form />
    </div>
  );
}

export default medos;
