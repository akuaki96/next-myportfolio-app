import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.body}>
        <div className={styles.header}>
          <h1 className={styles.headerText}>myPortFolio</h1>

          <ul className={styles.headerList}>
            <li>
              <a href="works">Works</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.main}></div>

        <div className={styles.footer}></div>
      </div>
    </>
  );
}
