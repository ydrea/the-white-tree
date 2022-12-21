import { useContext, useEffect, useState } from "react";
import styles from "../styles/Form.module.css";
import { API_URL } from "../utils/urls";
import { HeaderContext } from "../context/HeaderContext";
import { parseJwt } from "../utils/parseJwt";
import { destroyCookie, parseCookies } from "nookies";
//
function form({ jwt }) {
  const [ime, imeSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [loading, setLoading] = useState(false);
  //
  // const jwt = parseCookies(context).jwt;
  const { user, userSet } = useContext(HeaderContext);
  console.log("userMenus", user);

  const url = API_URL + "/menus";
  //
  useEffect(() => {
    console.log(jwt, user);
  }, []);

  const handleSubmit = () => {
    postMenus(jwt, user);
  };

  const postMenus = async (jwt, user) => {
    if (user) {
      setLoading(true);
      try {
        const data = { ime: ime, description: description };
        const add = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(data),
        });
        const resUl = await add.json();
        console.log(resUl);
      } catch (err) {
        console.log("nie", err);
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.contain}>
      <form>
        <input
          type="text"
          value={ime}
          onChange={(e) => imeSet(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => descriptionSet(e.target.value)}
        />
        <input type="button" value="submit" onClick={() => handleSubmit()} />
      </form>
    </div>
  );
}

export default form;

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
