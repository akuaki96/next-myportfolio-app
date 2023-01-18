import styles from "../styles/Home.module.css";
import scoreImage from "../public/score.jpg";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <Header></Header>

        <div className={styles.main}>
          <div className={styles.imgContents}>
            <p>
              Score Arrangement <br />
              <span>&</span> Programming
            </p>
          </div>

          <div className={styles.contentsWrapper}>
            <h2 className={styles.categoryText}>Category</h2>
            <ul className={styles.contentsList}>
              <li>
                <div className={styles.contentItem}>
                  <h2>
                    <a href="works">Works</a>
                  </h2>
                  <p>作成したコンテンツの紹介</p>
                </div>
              </li>
              <li>
                <div className={styles.contentItem}>
                  <h2>
                    <a href="about">About</a>
                  </h2>
                  <p>プロフィール紹介</p>
                </div>
              </li>

              <li>
                <div className={styles.contentItem}>
                  <h2>
                    <a href="contact">Contact</a>
                  </h2>
                  <p>連絡用ページ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
