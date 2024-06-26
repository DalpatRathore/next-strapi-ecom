import { Card } from "../ui/card";
import ProductItem from "./ProductItem";

const ProductList = ({ products }: any) => {
  const productsData = products.data;

  if (productsData.length <= 0) {
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

  return (
    <>
      {productsData.map((product: any) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </>
  );
};
export default ProductList;
