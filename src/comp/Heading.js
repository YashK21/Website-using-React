import React, { useEffect, useState } from 'react'

const Heading = () => {
    const [img,setImg] = useState()
    const [heading,setHeading] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async () => {
        const url = await fetch("https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/")
          const res = await url.json()
          const heading = await res.heading.heading
          setHeading(heading)
        const img = await (res.heading.svg)
        setImg(img)
    }
    getData()
    return (
        <>
        <img src={img} alt="icon"/>
        <div>
           {heading}
        </div>
        </>
  )
}

export default Heading