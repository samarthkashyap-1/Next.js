import Link from "next/link"

export default function Homepage() {
    return (
      <>
        <h1>Welocme to Home page</h1>
        <p>hello</p>
       
        <div className="flex bg-red-300 gap-10 ">
          <Link href="/about"> About </Link>
          <Link href="/blog"> Blog </Link>
          <Link href="/products"> Product </Link>
        </div>
      </>
    );
    }
