import { useEffect, useState } from "react";

type Product = {
    id: number;
    image: string;
    name: string;
    discounted: string;
    price: string;
    percent: string;
  };
  
export default function FetchProducts() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      let isMounted = true;
  
      const fetchData = async () => {
        try {
          const res = await fetch("/products.json");
          if (!res.ok) {
            throw new Error("Unable to fetch");
          }
  
          const json = await res.json();
          // console.log(json);
  
          if (isMounted) {
            setData(json);
            setLoading(false);
          }
        } catch (error) {
          if (!isMounted) {
            console.error("Error fetching data", error);
            setLoading(false);
          }
        }
      };
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, []);

    return {data,loading}
}