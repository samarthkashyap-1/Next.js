

export default function Reviews({params}:{
    params: {
        productId: string;
    };
    
}) {
  return <h1>Reviews of product {params.productId}</h1>;
}