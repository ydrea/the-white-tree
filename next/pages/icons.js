import Image from "next/image";

import styles from "../styles/Icons.module.css";

function icons() {
  // function MouseOver(event) {
  //   event.target.style.background = "red";
  // }
  // function MouseOut(event) {
  //   event.target.style.background = "";
  // }
  return (
    <div className={styles.contain}>
      <div className={styles.cnt}>
        vegan
        <span className={styles.icons}>
          <Image
            src="/VG/vg.svg"
            alt="vegan"
            width={58}
            height={58}
            data-tip="vegan"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        vegetarian
        <span className={styles.icons}>
          <Image
            src="/VT/vt.svg"
            alt="vegetarian"
            width={58}
            height={58}
            data-tip="vegetarian"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        keto
        <span className={styles.icons}>
          <Image
            src="/KT/kt.svg"
            alt="keto"
            width={58}
            height={58}
            data-tip="keto"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        paleo
        <span className={styles.icons}>
          <Image
            src="/PL/pl.svg"
            alt="paleo"
            width={58}
            height={58}
            data-tip="paleo"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        gluten-
        <span className={styles.icons}>
          <Image
            src="/GF/gf.svg"
            alt="
            gluten-free"
            width={58}
            height={58}
            data-tip="gluten-free"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        organic
        <span className={styles.icons}>
          <Image
            src="/OR/or.svg"
            alt="organic"
            width={58}
            height={58}
            data-tip="organic"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        affordable
        <span className={styles.icons}>
          <Image
            src="/AF/af.svg"
            alt="affordable"
            width={58}
            height={58}
            data-tip="affordable"
          />
        </span>
      </div>

      <div className={styles.cnt}>
        local
        <span className={styles.icons}>
          <Image
            src="/LS/ls.svg"
            alt="local"
            width={58}
            height={58}
            data-tip="locally sourced"
          />
        </span>
      </div>
    </div>
  );
}

export default icons;
