import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useFetchO(url, method, headers, body, user, getToken) {
  const [data, dataSet] = useState();
  const [err, errSet] = useState();

  const router = useRouter();

  useEffect(() => {
    fetch(url, {
      method: method,
      headers: headers,
      body: body,
      user: user,
      getToken: getToken,
    })
      .then((res) => {
        if (res.status === 401) {
          router.push("/login");
        }

        if (!res.ok) {
          throw res.status;
        }
        return res.json();
      })
      .then((data) => {
        dataSet(data);
      })
      .catch((e) => {
        errSet(e);
      });
  }, []);

  return { data, err };
}

export default useFetchO;
