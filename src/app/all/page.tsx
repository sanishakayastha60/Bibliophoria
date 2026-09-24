import { getAllItems } from "../actions/itemAction";
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
          </div>
        ))}
      </div>
    </div>
  );
}
