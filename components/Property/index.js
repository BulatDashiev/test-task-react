import Image from "next/image";
import styles from "./Property.module.scss";
import Pin from "public/assets/pin-gray.svg";
import Dot from "public/assets/dot.svg";

export default function Property(props) {
  const { property } = props;
  return (
    <div className={styles.property}>
      <Image src={property.image} width="260" height="160" objectFit="cover" />
      <div className={styles.body}>
        <h3 className={styles.title}>{property.name}</h3>
        <span className={styles.address}>
          <Pin /> {property.address}
        </span>
        <span className={styles.rooms}>
          <span>{property.bedrooms} Slaapkamers</span>
          <Dot />
          <span>{property.bathrooms} Badkamers</span>
        </span>
        <span className={styles.price}>€ {property.price}</span>
      </div>
    </div>
  );
}
