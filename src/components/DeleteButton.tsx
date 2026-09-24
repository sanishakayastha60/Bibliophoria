"use client";
import { deleteItem } from "@/app/actions/itemAction";
export default function Button({ info }: { info: string }) {
  return (
    <button
      className="p-2 bg-red-200 rounded-xl"
      onClick={async () => {
        const ask = window.confirm("Are you sure?");
        if (ask) {
          console.log(typeof info);
          console.log("ok");
          await deleteItem(info);
        }
      }}
    >
      Delete
    </button>
  );
}
