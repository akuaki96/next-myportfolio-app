import headerStyles from "../../styles/Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={headerStyles.header}>
        <h1 className={headerStyles.headerText}>
          <a href="/">MyPortFolio</a>
        </h1>

        <ul className={headerStyles.headerList}>
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
    </>
  );
};
