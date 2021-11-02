import React, { useState } from "react";
import Property from "components/Property";
import PropertySkeleton from "components/PropertySkeleton";
import styles from "./Home.module.scss";
import Select from "components/common/Select";
import SearchInput from "components/common/SearchInput";
import { load } from "utils";
import { sortItems, typeItems } from "./constants";

export default function Home() {
  const [sort, setSort] = useState(sortItems[0].value);
  const [type, setType] = useState(typeItems[0].value);
  const [filter, setFilter] = useState("");
  const [loading, data] = load(
    `http://localhost:3000/api/properties?sort=${sort}&type=${type}&search=${filter}`
  );

  const properties = loading ? new Array(10).fill(null) : data;
  const PropertyItem = loading ? PropertySkeleton : Property;

  return (
    <div className={styles.grid}>
      <div className={styles.aside}>
        <div>
          <Select
            className={styles.select}
            prefix="Sort by"
            items={sortItems}
            value={sort}
            onSelect={(item) => setSort(item.value)}
          />
          <Select
            className={styles.select}
            prefix="Type"
            items={typeItems}
            value={type}
            onSelect={(item) => setType(item.value)}
          />
        </div>
      </div>
      <div>
        <SearchInput
          placeholder="Plaats, buurt, adres, etc."
          onSubmit={(value) => setFilter(value)}
          requesting={loading}
        />
        <ul className={styles.properties}>
          {properties.map((property, i) => (
            <li key={i}>
              {i > 0 && <hr />}
              <PropertyItem property={property} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
