import styles from "./App.module.css";

import HeaderDiv from "./components/Header/HeaderDiv";

function App() {
  return (
    <div className={styles["primary-app"]}>
      <HeaderDiv />
    </div>
  );
}

export default App;
