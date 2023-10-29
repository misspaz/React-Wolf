import { useState } from "react";

import List from "../components/List/List";

export default function Main() {
  const [elementsList, setElementsList] = useState(["Lobo", "Ciudadano"]);

  return (
    <div>

      <List data={elementsList} />
    </div>
  );
}
