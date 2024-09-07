import CartContent from "./CartContent";
import { useAuth } from "./context/UseAuth";
import FetchProducts from "./FetchProducts";
import Order from "./Order";
import RenderProducts from "./RenderProducts";

export default function Cart() {
  const { data, loading } = FetchProducts();
  const { cartItem } = useAuth();

  return (
    <div className="mx-auto mt-16 p-4 max-w-5xl">
      <h2 className="barlow-semibold text-2xl mb-4 text-center md:text-left">
        An overview of your order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {loading ? (
          <div className="col-span-1 lg:col-span-2 flex justify-center items-center h-32">
            <p className="text-lg">Loading ...</p>
          </div>
        ) : (
          <>
            
            <div className="space-y-4">
              <RenderProducts data={data}>
                {(product) =>
                  cartItem[product.id] > 0 ? (
                    <CartContent
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      discounted={product.discounted}
                      quantity={cartItem[product.id]}
                    />
                  ) : null
                }
              </RenderProducts>
            </div>

           
            <Order />
          </>
        )}
      </div>
    </div>
  );
}
