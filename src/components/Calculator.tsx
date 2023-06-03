"use client";

import { useState } from "react";
import styles from "../styles/DolarPrice.module.css";
import Image from "next/image";
import ArgentinaFlag from "../../public/argentina_flag.svg";
import USAFlag from "../../public/usa_flag.svg";

export default function Calculator({ price }: { price: number }) {
  const [formData, setFormData] = useState({ usd: "0", ars: "0" });

  const calcUSDToARS = (usd: number) => {
    return (usd * price).toFixed(3);
  };

  const calcARSToUSD = (ars: number) => {
    return (ars / price).toFixed(3);
  };

  const handleDollarChange = (event: any) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      usd: value,
      ars: calcUSDToARS(value),
    }));
  };

  const handlePesoChange = (event: any) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      ars: value,
      usd: calcARSToUSD(value),
    }));
  };

  return (
    <div className={styles.box}>
      <form>
        <div className={styles.input_container}>
          <label htmlFor="usd" className={styles.label}>
            Dólares (USD)
          </label>
          <div className={styles.wrapper}>
            <div className={styles.flag}>
              <Image src={USAFlag} alt="United States flag" width={25} />
            </div>
            <input
              id="usd"
              type="number"
              name="usd"
              min={0}
              value={formData.usd}
              onChange={handleDollarChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.input_container}>
          <label htmlFor="ars" className={styles.label}>
            Pesos (ARS)
          </label>
          <div className={styles.wrapper}>
            <div className={styles.flag}>
              <Image src={ArgentinaFlag} alt="Argentina flag" width={25} />
            </div>
            <input
              type="number"
              name="ars"
              id="ars"
              min={0}
              value={formData.ars}
              onChange={handlePesoChange}
              className={styles.input}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
