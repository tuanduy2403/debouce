import "./styles.css";
import { useRef, useState } from "react";
export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const findSearchInputRef = useRef();
  console.log(searchInput);
  return (
    <div className="App">
      <input
        onChange={(e) => {
          if (findSearchInputRef.current) {
            clearTimeout(findSearchInputRef.current);
          }
          findSearchInputRef.current = setTimeout(() => {
            setSearchInput(e.target.value);
          }, 300);
        }}
      />
    </div>
  );
}
