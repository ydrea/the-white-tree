import Head from "next/head";
import BuyButton from "../../components/BuyButton";
import { twoDecimals } from "../../utils/format";
import { API_URL, fromImageToUrl } from "../../utils/urls";
//
const Producer = ({ item }) => {
  return (
    <div>
      <Head>
        {/* {item.meta_title && <title>{item.meta_title}</title>}
        {item.meta_description && (
          <meta name="description" content={item.meta_description} />
        )} */}
      </Head>

      <h3>{item.name}</h3>
      <img src={fromImageToUrl(item.img_main)} />
      <h3>{item.name}</h3>
      <BuyButton product={item} />
      <p>${twoDecimals(item.price)}</p>

      <p>{item.content}</p>
    </div>
  );
};

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/producers/?id=${id}`);
  const found = await res.json();

  return {
    props: {
      item: found[0],
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/producers`);
  const items = await res.json();
  return {
    paths: items.map((el) => ({
      params: { id: String(el.id) },
    })),
    fallback: false,
  };
}

export default Producer;
