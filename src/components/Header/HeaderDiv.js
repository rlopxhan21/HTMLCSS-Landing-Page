import styles from "./HeaderDiv.module.css";

const HeaderDiv = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["brand-name"]}>#lopxhan</h1>

      <div className={styles["header-primary-div"]}>
        <h1 className={styles["header-primary-box"]}>
          <span className={styles["header-primary-main"]}>
            Lopxhan Industries
          </span>
          <span className={styles["header-primary-sub"]}>
            Help Changing the World
          </span>
        </h1>
        <a
          href="#"
          className={`${styles["btn"]} ${styles["btn-white"]} ${styles["btn-animated"]}`}
        >
          Discover More About Us
        </a>
      </div>
    </header>
  );
};

export default HeaderDiv;
