import { createFactory } from "react";
import "./App.css";
import {
  componentFactory,
  ComponentFactoryItemName,
  IComponentFactoryItem,
} from "./components/utils";

function App() {
  const order: IComponentFactoryItem[] = [
    {
      name: ComponentFactoryItemName.person,
      props: { name: "Jim Smith", age: 33 },
    },
    {
      name: ComponentFactoryItemName.book,
      props: { name: "Bible", Description: "Holly stuff", pages: 123 },
    },
    {
      name: ComponentFactoryItemName.person,
      props: { name: "John Doe", age: 56 },
    }
  ];

  const elems = order.map((it) =>
    componentFactory({ name: it.name, props: it.props })
  );

  return <div className="App">{elems}</div>;
}

export default App;
