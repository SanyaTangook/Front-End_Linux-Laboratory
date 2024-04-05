"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import dataLab from "./Lab.json";


export default function page({ params }) {
  
  const [idContainer, setIdContainer] = useState("");


  const onClickStart = () => {
    let Image = "ubuntu:latest";
    axios
      .post(`http://localhost:3001/containers/${Image}`)
      .then((respones) => setIdContainer(respones.data.id));
  };

  const onClickcheck = () =>{
    axios.get('http://localhost:3001/checklab' )
  }

  console.log(idContainer)
  const DataLab = dataLab.Lab[params.id - 1];
  return (
    <>
      <div className="flex">
        <div className="basis-1/4 border">
          <div className="grid justify-items-stlart">
            <button onClick={()=>onClickStart()}> Start </button>
          </div>
        </div>
        <div className="basis-full">
          <div className="grid justify-items-center">
            <Link
              id="link"
              target="_blank"
              href={`http://localhost:3001/console/${idContainer}`}
              className="btn btn-wide btn-primary"
            >
              Open Terminal
            </Link>
            <button className="btn" onClick={()=>onClickcheck()}> กด </button>
          </div>
        </div>
        <div className="basis-1/4 border">
          <div className="grid justify-items-start">
            <h1>ff</h1>
          </div>
        </div>
      </div>
    </>
  );
}
