//React Router
import { Outlet } from "react-router-dom";
//Components
import Header from "@components/common/header/Header";
import Footer from "@components/common/footer/Footer";
//Styles
import styles from "./styles.module.css";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.mainSection}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
