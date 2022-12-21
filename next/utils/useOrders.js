import { destroyCookie, parseCookies } from "nookies";
import { useEffect, useState } from "react";

export const useOrders = (context, user) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const jwt = parseCookies(context).jwt;
  //
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = jwt;
          const orderRes = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await orderRes.json();
          setOrders(data);
        } catch (err) {
          setOrders([]);
        }
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return { orders, loading };
};
