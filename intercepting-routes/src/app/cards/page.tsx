import Link from "next/link";
import { details } from "./detail"; 


export default function CardsPage() {
    return (
       <div className="flex gap-5">
              {details.map((item) => (
                
               <Link href={`/cards/${item.id}`}>
                <div className="w-52 h-52 border-blue-600 border-2">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                </div>
                </Link>
              ))}
       </div>
    );
    }