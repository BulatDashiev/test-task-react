import styles from "./PropertySkeleton.module.scss";

export default function PropertySkeleton() {
  return (
    <div className={styles.property}>
      <div className={styles.image}></div>
      <div className={styles.body}>
        <p></p>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
