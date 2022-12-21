import { useContext, useEffect, useState } from "react";
import styles from "../styles/Form.module.css";
import { API_URL } from "../utils/urls";
import { HeaderContext } from "../context/HeaderContext";
//
function Form({ jwt, user }) {
  const [ime, imeSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [loading, setLoading] = useState(false);
  // const user = useContext(HeaderContext);

  const url = API_URL + "/menus";
  // //
  useEffect(() => {
    console.log(jwt, user);
  }, []);

  const postMenus = async () => {
    if (user) {
      // e.preventDefault();
      setLoading(true);
      try {
        const data = { ime: ime, description: description };
        const add = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer + ${jwt}`,
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
      <form onSubmit={() => postMenus()}>
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
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
