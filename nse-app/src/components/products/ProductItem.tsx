import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

type ProductItemProps = {
  product: {
    id: string;
    attributes: {
      title: string;
      description: string;
      price: number;
      instantDelivery: boolean;
      content: string;
      category: string;
      image: string;
    };
  };
};

//

const ProductItem = ({ product }: ProductItemProps) => {
  // console.log(product);
  const { title, description, price, image, category } = product.attributes;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={`http://localhost:1337${image.data.attributes.url}`}
          alt={title}
          width={500}
          height={500}
          className="rounded-md"
        ></Image>
        <div className="flex items-center justify-start gap-2 mt-5">
          <p className="text-sm font-medium">Cateogry:</p>
          <p className={cn("text-sm", category ? "" : "text-muted-foreground")}>
            {category ? category : "No category"}
          </p>
        </div>
      </CardContent>
      <Separator></Separator>
      <CardFooter className="flex justify-between mt-5">
        <p className="text-muted-foreground">
          Price{" "}
          <span className="italic text-black dark:text-white">${price}</span>
        </p>
        <Button>Shop</Button>
      </CardFooter>
    </Card>
  );
};
export default ProductItem;
