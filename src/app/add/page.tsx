"use client";

import { useState } from "react";
import { Reread, ItemType, ItemStatus } from "@/generated/prisma/enums";
import { CreateItem } from "../actions/itemAction";
import UploadImage from "@/components/UploadImage";
export default function AddNew() {
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl py-4 font-bold">Add New</h1>
      <form action={CreateItem}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="border p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="altName">Alternate Name</label>
          <input type="text" name="altName" className="border p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="border p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Upload Image</label>
          <UploadImage onUpload={setImageUrl} />
          <input
            type="hidden"
            name="image"
            value={JSON.stringify(imageUrl)}
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author">Author</label>
          <input type="text" name="author" className="border p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="chapter">Chapters</label>
          <input type="text" name="chapter" className="border p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status">Status</label>
          <select name="status">
            {Object.values(ItemStatus).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="reread">Reread</label>
          <select name="reread">
            {Object.values(Reread).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" className="border p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="type">Type</label>
          <select name="type">
            {Object.values(ItemType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="review">Your Personal Review</label>
          <input type="text" name="review" className="border p-2 rounded-lg" />
        </div>
        <button
          type="submit"
          className="w-full my-4 p-2 text-center bg-blue-200 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
