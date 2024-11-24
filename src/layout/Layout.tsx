import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './layout.module.css'

export default function Layout() {

  return (
    <>
      {/* здесь вызов компонента header для верстки шапки сайта */}
      <Header />
      <main className={styles.main}>
        {/* за место компонента Outlet будут приходить переключаемые компоненты из маршрутизации */}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
