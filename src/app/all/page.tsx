import { getAllItems } from "../actions/itemAction";
export default async function AllLibraryPage() {
  const items = await getAllItems();
  return (
    <div>
      <h1>All items</h1>
      <div>
        {items.map((item) => (
          <div className="border">
            <h2>{item.name}</h2>
            <i>
              {item?.altName}.{item?.author}
            </i>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
