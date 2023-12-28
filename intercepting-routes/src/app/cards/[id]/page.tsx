import { details ,CardDetail} from "../detail";
import Card from "@/app/component/Card";

export default function CardsIdPage({params: {
    id
    
}}:{
    params: {id: string};
    })  {
    
    const item: CardDetail = details.find((item) => item.id === parseInt(id))!;

    // console.log(item);
    return (
        <>
        <Card item={item} />
        </>
    );
    }