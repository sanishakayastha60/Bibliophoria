"use server";
import Typewriter from "./Typewriter";
export default async function Quote() {
  const apiKey = process.env.API_NINJA;
  if (!apiKey) {
    throw new Error("No API Key");
  }
  const response = await fetch("https://api.api-ninjas.com/v1/facts", {
    method: "GET",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return (
    <div className="relative flex justify-center">
      <div className="absolute left-0 top-8 w-25 h-8 bg-blue-300 -rotate-40" />
      <div className="absolute right-0 top-8 w-25 h-8 bg-blue-300 rotate-40" />
      <div className="w-[95%] font-mono mt-8 bg-white p-4 py-8">
        <h2 className="uppercase font-bold text-xl text-center pb-4">
          a fun fact for the day
        </h2>
        <Typewriter text={data[0].fact} />
      </div>
    </div>
  );
}
