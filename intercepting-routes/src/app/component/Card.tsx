export default function Card({
    item,
  }: {
    item: {
        id: number;
      name: string;
      description: string;
    };
  
}) {
    console.log(item);
    return (
      <div className="">
        <div className="w-96 h-96 border-red-700 border-4 absolute left-[40%]">
          <h1 className=" text-8xl text-white">{item.name}</h1>
          <p className=" text-4xl"> {item.description}</p>
        </div>
      </div>
    );
}