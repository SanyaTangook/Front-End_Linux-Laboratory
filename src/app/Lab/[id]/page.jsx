"use client";
import axios from "axios";
import Link from "next/link";

export default function lab() {
  const onClickLab = () => {
    axios
      .post("http://localhost:3001/containers/ubuntu:latest")
      .then(console.log("ผ่าน"));
  };

  
  return (
    <>
      <header>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/Home">Home</Link>
            </li>
            <li>
              <Link href="/Room">Room</Link>
            </li>
            <li>
              <Link href="#">Lab</Link>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <nav>
          <li>
            <button className="btn btn-square" onClick={onClickLab}>
              {" "}
              เริ่มทำ{" "}
            </button>
          </li>
          <li>
            <button className="btn" onClick={onClickLab}>
              {" "}
              ตรวจคำตอบ{" "}
            </button>
          </li>
        </nav>
      </section>
    </>
  );
}
