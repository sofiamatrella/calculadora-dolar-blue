import Response from "@/models/API";
import styles from "./page.module.css";
import DolarPrice from "@/components/DolarPrice";
import Calculator from "@/components/Calculator";

async function getData() {
  const res = await fetch("https://api.bluelytics.com.ar/v2/latest");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: Response = await getData();

  return (
    <main className={styles.main}>
      <Calculator price={data.blue.value_sell} />
      <DolarPrice
        sell_price={data.blue.value_sell}
        buy_price={data.blue.value_buy}
        updated={data.last_update}
      />
    </main>
  );
}
