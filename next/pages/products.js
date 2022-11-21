// import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { twoDecimals } from "../utils/format";
import { API_URL, fromImageToUrl } from "../utils/urls";
//

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/products/`);
  console.log(res);
  const items = await res.json();
  console.log(items);
  return {
    props: {
      items,
    },
  };
}

//
function products({ items }) {
  console.log(items);
  return (
    <div>
      <h3>products</h3>
      <span>
        {" "}
        {items.map((i) => (
          <div className={styles.product}>
            <Link href={`/products/${i.id}`}>
              <a>
                <div className={styles.product__Rows}>
                  <div className={styles.product__ColImg}>
                    <img src={fromImageToUrl(i.img_main)} />
                  </div>
                  <div className={styles.product__Col}>
                    {i.name} &euro;{twoDecimals(i.price)}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </span>{" "}
    </div>
  );
}

export default products;
