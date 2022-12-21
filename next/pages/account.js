import Head from "next/head";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";
import { useContext, useState } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { parseJwt } from "../utils/parseJwt";
import { useOrders } from "../utils/useOrders";
// //

export default function account({ jwt }) {
  const { orders, loading } = useOrders();
  const [, userIdSet] = useState();
  //
  const { user, userSet } = useContext(HeaderContext);
  // console.log("AccProps", userId);

  const logoutUser = () => {
    destroyCookie(null, "jwt");
    console.log("Logout", jwt);
    userSet([]);
    userIdSet();
    // console.log("Logout", user);
  };

  //
  if (!user) {
    return (
      <div>
        <p>Please Login or Register before accessing this page</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Your Account</title>
        <meta name="description" content="Your orders will be shown here" />
      </Head>
      <h2>Account Page</h2>

      <h3>Your Orders</h3>
      {loading && <p>Orders are Loading</p>}
      {orders.map((order) => (
        <div key={order.id}>
          {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
          {order.product.name} ${order.total} {order.status}
        </div>
      ))}
      <hr />
      <p>Logged in as userId {user}</p>
      <p>
        <a href="#" onClick={logoutUser}>
          Logout
        </a>
      </p>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const jwt = parseCookies(context).jwt || null;
  if (jwt) {
    const userP = parseJwt(jwt);
    const userId = userP.id;
    return {
      props: { jwt, userId },
    };
  } else {
    return {
      props: {},
    };
  }
}
