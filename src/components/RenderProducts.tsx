import React from "react";

type Product = {
  id: number;
  image: string;
  name: string;
  discounted: string;
  price: string;
  percent: string;
};

type RenderProps = {
  data: Product[];
  children: (product: Product) => React.ReactNode;
};

export default function RenderProducts({ data, children }: RenderProps) {
  return (
    <>
      {data.map((product) => (
        <React.Fragment key={product.id}>{children(product)}</React.Fragment>
      ))}
    </>
  );
}
