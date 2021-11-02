import styles from "./SearchInput.module.scss";
import Magnifier from "public/assets/magnifier.svg";
import { useState } from "react";

export default function SearchInput(props) {
  const { onSubmit, requesting = false, value = "", placeholder } = props;
  const [text, setText] = useState(value);
  return (
    <div className={styles.search}>
      <Magnifier />
      <input
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            onSubmit && onSubmit(text);
            setText("");
          }
        }}
        placeholder={placeholder}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        disabled={requesting}
        className={styles.submit}
        onClick={() => {
          onSubmit && onSubmit(text);
          setText("");
        }}
      >
        {requesting && (
          <img src="assets/load-indicator.png" alt="loading indicator" />
        )}
        Search
      </button>
    </div>
  );
}
