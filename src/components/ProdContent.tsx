import Cards from "./Cards";
import FetchProducts from "./FetchProducts";
import RenderProducts from "./RenderProducts";
import SideBar from "./SideBar";

export default function ProdContent() {
  const { data, loading } = FetchProducts();

  return (
    <div className="flex mt-28 justify-center ">
      <SideBar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <RenderProducts data={data}>
            {(product) => (
              <Cards
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                discounted={product.discounted}
                percent={product.percent}
              />
            )}
          </RenderProducts>
        </div>
      )}
    </div>
  );
}
