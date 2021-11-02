import { useEffect, useState } from "react";

// artificial throttle
export function sleep_fetch(...args) {
  return new Promise((resolve) =>
    fetch(...args).then((res) => setTimeout(() => resolve(res), 1000))
  );
}

export function load(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    sleep_fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setError(err.message))
      .then(() => setLoading(false));
  }, [url]);
  return [loading, data, error];
}
