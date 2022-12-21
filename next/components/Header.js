import Link from "next/link";
import { useRouter } from "next/router";
// import { parseCookies } from "nookies";
import styles from "../styles/Header.module.css";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../context/HeaderContext";

// // TO DO >> contextualize Header
// import NavContext from "../context/NavContext";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { user, userSet } = useContext(HeaderContext);

  useEffect(() => {
    console.log("Header", user);
  });

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {"<"} Back{" "}
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <img src="/glogo.svg" height="150" alt="logo" />
            <h3 className={styles.h3}>WHITE TREE</h3>
          </a>
        </Link>
      </div>
      <div className={styles.cntnr}>
        <div className={styles.title}>
          <Link href="/about">
            <a>
              <h3 className={styles.h3}>about</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/icons">
            <a>
              <h3 className={styles.protected}>icons</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/products">
            <a>
              <h3 className={styles.h3}>products</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/restaurants">
            <a>
              <h3 className={styles.h3}>restaurants</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/producers">
            <a>
              <h3 className={styles.h3}>producers</h3>
            </a>
          </Link>
        </div>

        <div className={styles.title}>
          <Link href="/menus">
            <a>
              <h3 className={styles.h3}>menus</h3>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.auth}>
        {/* login indicator */}
        {user !== null ? (
          <>
            <Link href="/account">
              <a>
                account {user}
                <img src="/user_avatar.png" alt={"alt"} />
              </a>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
      </div>
    </div>
  );
}

// Header.getInitialProps = async (context) => {
//   console.log(context);
// };
