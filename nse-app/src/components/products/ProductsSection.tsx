import { getLatestProducts } from "@/lib/apiAccess";
import { Card } from "@/components/ui/card";
import ProductList from "./ProductList";

let latestProducts;

const ProductsSection = async () => {
  try {
    latestProducts = await getLatestProducts();
    if (latestProducts.data.length === 0) {
      return (
        <div className="p-5">
          <Card className="w-full flex items-center justify-center h-56 md:h-96">
            <h2 className="w-full max-w-7xl scroll-m-20 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-center pl-5">
              No products are available at the moment.
            </h2>
          </Card>
        </div>
      );
    }
  } catch (error) {
    return (
      <div className="w-full pt-5 md:pt-10 flex items-center justify-center h-56 md:h-[300px] bg-white dark:bg-black">
        <h2 className="w-full max-w-7xl scroll-m-20 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-center pl-5">
          Sorry, something went wrong!
        </h2>
      </div>
    );
  }

  return <ProductList products={latestProducts}></ProductList>;
};
export default ProductsSection;
