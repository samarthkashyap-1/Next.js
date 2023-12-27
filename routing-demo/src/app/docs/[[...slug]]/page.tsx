export default function Docs({params}:{
    params: {
        slug: string[];
    };
}) {
    console.log(params.slug);

    if (params.slug?.length == 2) {
        return <div>Docs for {params.slug[0]} and content for it is {params.slug[1]}</div>;
    }
    else if (params.slug?.length == 1) {
        return <div>Docs for {params.slug[0]}</div>;
    }
    else {
    return <div>Docs home page</div>;
    }
    }
