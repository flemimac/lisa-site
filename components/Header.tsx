import Image from "next/image";
import styles from "../styles/header.module.css";

export default function Header() {
  return(
    <header className={styles.header}>
      <div>
        <Image 
          src={'/lisa-logo.svg'}
          width={60}
          height={50}
          alt=""
        />
      </div>
      <div className={styles.links}>
        <a href="#details">главная</a>
        <a href="#form">детали</a>
        <a href="#footer">контакты</a>
      </div>
      <a href="#form" className={styles.about}>Оставить заявку</a>
    </header>
  )
}