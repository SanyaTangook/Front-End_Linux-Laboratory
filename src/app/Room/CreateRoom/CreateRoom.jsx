"use server";
import { redirect } from "next/navigation";

export default async function CreateRoom(formData) {
  const Id = await formData.get("Id");
  console.log(Id);
  if (Id !== "") {
    redirect("/Home");
  } else {
    redirect("/");
  }
  // axios.post('http://localhost:3001/Room/',formData.get('Id'))
}
