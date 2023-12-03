"use server";

import { redirect } from "next/navigation";

export async function postPayment(prevState: any, formData: FormData) {
  const response = await fetch(
    "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  redirect("/confirmation")
}
