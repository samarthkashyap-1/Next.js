import { Metadata } from "next";

type Props = {
  params:{
    productId:string
  }
};

export const generateMetadata =async ({params}: Props): 
Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 100);
  });
  return {
    title: `${title}`,
    description: `Product ${title} description`,
  };
  }

export default function Product({
  params,
}: Props
) {
  return <h1>Product Page {params.productId}</h1>;
}
