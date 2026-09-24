"use server";
import { redirect } from "next/navigation";
import { ItemStatus, ItemType, Reread } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
export async function CreateItem(formData: FormData) {
  const name = formData.get("name") as string;
  const altName = formData.get("altName") as string;
  const description = formData.get("description") as string;
  const imageUrl = JSON.parse(formData.get("image") as string);
  const author = formData.get("author") as string;
  const chapter = Number(formData.get("chapter"));
  const status = formData.get("status") as ItemStatus;
  const reread = formData.get("reread") as Reread;
  const genre = formData.get("genre") as string;
  const type = formData.get("type") as ItemType;
  const review = formData.get("review") as string;

  const items = await prisma.item.create({
    data: {
      name,
      altName,
      description,
      imageUrl,
      author,
      chapters: chapter,
      reread,
      status,
      genre,
      type,
      personalReview: review,
    },
  });
  redirect("/dashboard");
}

export async function getAllItems() {
  const items = await prisma.item.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return items;
}
