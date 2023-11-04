import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>{err.status}</h1>
            <h3>{err.statusText}</h3>
            <h5>{err.data}</h5>
        </div>
    )
}

export default Error;