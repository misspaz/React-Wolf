import { useState } from "react";
import "../pages/Main.scss";
import List from "../components/List/List";

export default function Main() {
  const [elementsList, setElementsList] = useState(["Lobo", "Ciudadano"]);

  return (
    <div className="element-list">
      <p className="title">Hidden Characters<br />
       Creator</p>
      <List data={elementsList} />
    </div>
  );
}
