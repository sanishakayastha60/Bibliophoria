"use session";
export default async function FactCom() {
  const response = await fetch("https://api.api-ninjas.com/v1/factoftheday", {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.API_NINJA!,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  const data = await response.json();
  return (
    <div className="m-4 px-2 py-4 border rounded-xl ">
      <h1 className="uppercase text-2xl text-center py-2 font-bold">
        Fact of the Day
      </h1>
      <p className="text-xl">{data[0].fact}</p>
    </div>
  );
}
