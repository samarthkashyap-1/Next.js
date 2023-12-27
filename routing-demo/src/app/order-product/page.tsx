"use client";

import {useRouter} from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();
    const handleOrder = () => {
        alert("Order placed");
        router.replace("/");
        }
    return (
      <>
        <h1>Order Product Page</h1>
        <button
        onClick={handleOrder}>Place order</button>
      </>
    );
    }