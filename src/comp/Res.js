import React, { useState ,useEffect} from "react";

const Res = () => {
    const [res,setRes] = useState()
    useEffect(() => {
        getData()
    }, []);
    const getData = async () =>{
        const url =  await fetch("https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/")
        const res = await url.json()
        setRes(res.heading.heading)
    }
    getData()
    return <div>{res}</div>;
};

export default Res;
