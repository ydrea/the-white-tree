import Head from "next/head";
import Router from "next/router";
import { setCookie } from "nookies";
import { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../context/HeaderContext";
import styles from "../styles/Login.module.css";
//

//
export default function Login() {
  const [email, emailSet] = useState("");
  const [pass, passSet] = useState("");

  const { user, userSet } = useContext(HeaderContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logINfo = {
      identifier: email,
      password: pass,
    };
    //
    const login = await fetch(`http://localhost:1337/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logINfo),
    });
    const loginRes = await login.json();
    console.log("logINfo", logINfo);
    console.log("loginRES", loginRes);
    // //cookie
    setCookie(null, "jwt", loginRes.jwt, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    userSet(email);
    Router.push("/menus");
  };
  // //
  // useEffect(() => {
  //   userSet(email);
  //   console.log("user", user);
  // }, []);
  // //
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => emailSet(e.target.value)}
          type="email"
          placeholder="Email address..."
        />
        <input
          className={styles.input}
          value={pass}
          onChange={(e) => passSet(e.target.value)}
          type="password"
          placeholder="Password..."
        />
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
