import { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";

export default function Main() {
  const elementsList = ["Lobo", "Cuidadano"];

  const [elemento, setElemento] = useState(elementsList);

  const addNewElement = (newElement) => {
    const copyElemento = [...elemento];
    copyElemento.push(newElement);
    setElemento(copyElemento);
  };

  return (
    <div>
      <Form onSubmit={addNewElement} />

      <List data={elemento} />
    </div>
  );
}
