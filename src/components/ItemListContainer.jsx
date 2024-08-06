import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
  return (
    <>
      <h1>{props.greeting}</h1>
      <ItemList />
      <ItemCount />
    </>
  );
};
