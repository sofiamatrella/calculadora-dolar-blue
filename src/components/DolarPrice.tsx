import styles from "../styles/DolarPrice.module.css";

export default function DolarPrice({
  sell_price,
  buy_price,
  updated,
}: {
  sell_price: number;
  buy_price: number;
  updated: string;
}) {
  return (
    <div className={styles.box}>
      <h1> Dólar blue</h1>
      <div className={styles.prices_container}>
        <div className={styles.price}>
          <h6 className={styles.text}>COMPRA</h6>
          <h2>${buy_price}</h2>
        </div>
        <div className={styles.price}>
          <h6 className={styles.text}>VENTA</h6>
          <h2>${sell_price}</h2>
        </div>
      </div>
      <p className={styles.text}>{new Date(updated).toLocaleString()}</p>
    </div>
  );
}
