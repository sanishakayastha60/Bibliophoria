import { Reread, ItemType, ItemStatus } from "@/generated/prisma/enums";
import { CreateItem } from "../actions/itemAction";
export default function AddNew() {
  return (
    <div>
      <h1>Add New</h1>
      <form action={CreateItem}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="border" />
        </div>
        <div>
          <label htmlFor="altName">Alternate Name</label>
          <input type="text" name="altName" className="border" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" className="border" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" className="border" />
        </div>
        <div>
          <label htmlFor="chapter">Chapters</label>
          <input type="text" name="chapter" className="border" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select name="status">
            {Object.values(ItemStatus).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reread">Reread</label>
          <select name="reread">
            {Object.values(Reread).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" className="border" />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select name="type">
            {Object.values(ItemType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="review">Your Personal Review</label>
          <input type="text" name="review" className="border" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
