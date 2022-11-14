import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { NumberedList } from "./NumberedList";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { ControlledModal } from "./ControlledModal";
import { useState } from "react";
const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  const [shouldShowModel, setShouldShowModel] = useState(false);
  return (
    <>
      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      /> */}

      <ControlledModal
        shouldShow={shouldShowModel}
        onRequestClose={() => {
          setShouldShowModel(false);
        }}
      >
        <LargeProductListItem product={products[0]} />
      </ControlledModal>
      <button onClick={() => setShouldShowModel(!shouldShowModel)}>
        Show Modal
      </button>
    </>
  );
}

export default App;
