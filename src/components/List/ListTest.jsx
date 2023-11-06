import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import "../List/_List.scss";

export default function ListTest({ data }) {
  const [counters, setCounters] = useState(data.map(() => 1));
  const [shuffledArray, setShuffledArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementsList, setElementsList] = useState(["Wolf", "Citizen"]);
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [text, setText] = useState("");
  const [reset, setReset] = useState(false);

  const addNewElement = (newElement) => {
    setElementsList((firstElements) => [...firstElements, newElement]);
  };

  const handleAddElement = () => {
    addNewElement(text);
    console.log(text);
    // setText("");
  };

  const sumauno = (index) => {
    const copyCounters = [...counters];
    copyCounters[index]++;
    setCounters(copyCounters);
  };

  const restauno = (index) => {
    const copyCounters = [...counters];
    copyCounters[index]--;
    setCounters(copyCounters);
  };

  useEffect(() => {
    if (elementsList.length > counters.length) {
      const newCounters = Array(elementsList.length).fill(1);
      setCounters(newCounters);
    }
  }, [elementsList, counters]);

  const shuffle = () => {
    if (elementsList.length === 0) {
      // Si no quedan elementos, reiniciar todo
      setReset(true);
      return;
    }

    let shuffled = [];
    elementsList.forEach((item, index) => {
      for (let i = 0; i < counters[index]; i++) {
        shuffled.push(item);
      }
    });

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setShuffledArray(shuffled);
    setCurrentIndex(0);
    setReset(false); // Reinicio desactivado
  };

  const handleClick = () => {
    if (reset) {
      // Si es necesario reiniciar, resetear todo
      setShuffledArray([]);
      setCurrentIndex(-1);
      setCounters(data.map(() => 1));
      setElementsList(data);
      setReset(false);
    } else {
      if (currentIndex < shuffledArray.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Volver al primer elemento cuando se ha mostrado el último
      }
    }
  };

  const deleteElement = (item) => {
    const updatedList = elementsList.filter((element) => element !== item);
    setElementsList(updatedList);
  };

  return (
    <>
      {show && (
        <div className="main-page">
          <ul>
            {elementsList.map((item, index) => (
              <div className="li-counter" key={index}>
                <li>{currentIndex === index ? item : "???"}</li>
                <Counter
                  counter={counters[index]}
                  sumauno={() => sumauno(index)}
                  restauno={() => restauno(index)}
                />
                <button
                  className="delete-button"
                  onClick={() => deleteElement(item)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <div className="add-character">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              placeholder="Add character..."
            />
            <button onClick={handleAddElement}>Add</button>
          </div>
          <button className="dealing-button" onClick={shuffle}>
            Start Dealing
          </button>
        </div>
      )}

      {hide && (
        <div>
          {currentIndex < shuffledArray.length && (
            <p className="results-characters">{shuffledArray[currentIndex]}</p>
          )}
          <button className="next-character-button" onClick={handleClick}>
            {reset ? "Restart" : "Show next character"}{" "}
            {/* Cambiar etiqueta del botón */}
          </button>
        </div>
      )}
    </>
  );
}
