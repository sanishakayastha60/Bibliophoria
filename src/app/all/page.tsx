import { getAllItems, deleteItem } from "../actions/itemAction";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
export default async function AllLibraryPage() {
  const items = await getAllItems();
  return (
    <div>
      <h1>All items</h1>
      <div>
        {items.map((item) => (
          <div key={item.id} className="border">
            {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
            <h2>{item.name}</h2>
            <i>
              {item?.altName}.{item?.author}
            </i>
            <div>{item.description}</div>
            <div>{item.personalReview}</div>
            <div>
              <Link href={`/edit/${item.id}`}>
                <button className="p-2 bg-yellow-200 rounded-xl">Update</button>
              </Link>
              <DeleteButton info={`${item.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
