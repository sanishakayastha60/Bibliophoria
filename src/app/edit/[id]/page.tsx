import { updateItem, getItemById } from "../../actions/itemAction";
import { Reread, ItemType, ItemStatus } from "@/generated/prisma/enums";
export default async function EditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItemById(id);
  if (!item) {
    return <div>No item</div>;
  }
  return (
    <div>
      <h2>Edit</h2>
      <form action={updateItem.bind(null, item.id)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="border p-2 rounded-lg"
            defaultValue={item.name}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="altName">Alternate Name</label>
          <input
            type="text"
            name="altName"
            className="border p-2 rounded-lg"
            defaultValue={item.altName || ""}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="border p-2 rounded-lg"
            defaultValue={item.description || ""}
          />
        </div>
        //image
        <div className="flex flex-col">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            className="border p-2 rounded-lg"
            defaultValue={item.author || ""}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="chapter">Chapters</label>
          <input
            type="text"
            name="chapter"
            className="border p-2 rounded-lg"
            defaultValue={item.chapters || 0}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="status">Status</label>
          <select name="status" defaultValue={item.status}>
            {Object.values(ItemStatus).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="reread">Reread</label>
          <select name="reread" defaultValue={item.reread}>
            {Object.values(Reread).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            className="border p-2 rounded-lg"
            defaultValue={item.genre || ""}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="type">Type</label>
          <select name="type" defaultValue={item.type || ""}>
            {Object.values(ItemType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="review">Your Personal Review</label>
          <input
            type="text"
            name="review"
            className="border p-2 rounded-lg"
            defaultValue={item.personalReview || ""}
          />
        </div>
        <button
          type="submit"
          className="w-full my-4 p-2 text-center bg-blue-200 rounded-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
}
