"use client"

import { notFound } from "next/navigation";

const getRabdomNumber = () => Math.floor(Math.random() * 2);

export default function Review({ params }:
  {
    params: {
      productId: string;
      reviewId: string;
    };
  })
  {
    const random = getRabdomNumber();
    // if (random === 0) {
    //  throw new Error("Something went wrong");
    // }
     if (parseInt(params.reviewId) > 1000) {
       return notFound();
     }

    
  return <h1>{params.reviewId} Review of product {params.productId}</h1>;
}

