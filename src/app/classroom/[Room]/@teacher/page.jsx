"use client";

import Link from "next/link";
import data from "../../../classroom.json";
import { createRef, useState } from "react";


export default function page({ params }) {
  const [onlab, setonlab] = useState(true);
  const Switch = createRef()
  const onChangeLab = (event , lab) =>{
  }
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="#">{params.Room}</Link>
          </li>
        </ul>
      </div>
      <table className="table">
        <tbody>
          {Object.keys(data.classroom).map((keys) => (
            <tr key={keys}>
              <th className="w-5/6">
                <div className="card  bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="card-title">
                      {data.classroom[keys].lesson}
                    </div>
                    <hr className="border" />
                    <p>{data.classroom[keys].Topic}</p>
                  </div>
                </div>
              </th>
              <th className="w-1/6 ">
                <div className="grid gap-2  justify-center">
                  <span
                    className="border-4 border-green-700	rounded-full p-2 w-40 "
                    style={{ textAlign: "center" }}
                  >
                    {" "}
                    {data.classroom[keys].Timer}{" "}
                  </span>
                  <div className="flex justify-center p-2 ">
                  <p className="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300 m-1">OPNE LAB</p>
                    <label classNazme="relative cursor-pointer">
                      <input type="checkbox" ref={Switch} className="sr-only peer size-40" value='on' onChange={()=>onChangeLab(Switch.current.value , keys)}/>
                      <div className="w-[53px] h-7 flex items-center bg-gray-300 rounded-full text-[9px] peer-checked:text-[#007bff] text-gray-300 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Off'] peer-checked:after:content-['On'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]"></div>
                    </label>
                  </div>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
