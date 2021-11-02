import Dropdown from "public/assets/dropdown.svg";
import styles from "./Select.module.scss";
import cn from "classnames";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

export default function Select(props) {
  const { prefix, items, value, onSelect, className } = props;
  const current = items && items.find((item) => item.value === value);

  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setId(uniqid());
  }, []);

  useEffect(() => {
    window.addEventListener("click", onClick);
    function onClick(event) {
      if (id && event.target.closest("#select" + id) === null) {
        setShow(false);
      }
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [id]);

  return (
    <div id={"select" + id} className={cn(styles.select, className)}>
      <button onClick={() => setShow((show) => !show)}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <span className={styles.label}>{current.label}</span>
        <Dropdown />
      </button>

      {show && (
        <ul className={styles.list}>
          {items &&
            items.map((item) => (
              <li
                className={cn(styles.option, {
                  [styles.selected]: item.value === value,
                })}
                key={item.value}
                onClick={() => {
                  setShow(false);
                  onSelect && onSelect(item);
                }}
              >
                <span>{item.label}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
