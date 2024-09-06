import CartContent from "./CartContent";
import { useAuth } from "./context/UseAuth";
import FetchProducts from "./FetchProducts";
import Order from "./Order";
import RenderProducts from "./RenderProducts";

export default function Cart() {
  const { data, loading } = FetchProducts();
  const { cartItem } = useAuth();

  return (
    <div className="ml-[14rem] mt-20 p-4">
      <h2 className="barlow-semibold text-2xl mb-4">An overview of your order</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {loading ? (
          <div className="col-span-2 flex justify-center items-center h-32">
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
