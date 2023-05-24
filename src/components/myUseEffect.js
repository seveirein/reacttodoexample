import { useEffect, useState} from "react";

function MyUseEffect() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
    }, []);

    if(!data) {
        return <>Loading</>;
    } else {
        return (<>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            </>);
    }

}

export default MyUseEffect;