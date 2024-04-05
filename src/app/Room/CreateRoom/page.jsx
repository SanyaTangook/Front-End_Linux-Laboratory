"use client";
import CreateRoom from "./CreateRoom";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const styleFont = {
    fontSize: 50,
    fontWeight: "bold",
    padding: 5,
    margin: 10,
  };

  return (
    <>
      <h1 style={styleFont}> Linux Lab </h1>
      <div className="flex justify-center" style={{ padding: "10%" }}>
        <div className="p-5 card w-96 bg-neutral-content text-accent-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> สร้างห้องเรียน </h2>
            <p>ชื่อห้องเรียน</p>
            <form action={CreateRoom}>
              <input
                type="text"
                name="Id"
                placeholder="ชื่อห้องเรียน"
                required
                className="input input-bordered input-secondary w-full max-w-xs"
              />
              <div className="card-actions">
                <button className="mt-5 btn btn-block" type="submit">
                  {" "}
                  สร้างห้องเรียน{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
