import Image from "next/image";
import styles from "../styles/header.module.css";

export default function Header() {
  return(
    <div className={styles.header}>
      <div>
        <Image 
          src={'/lisa-logo.svg'}
          width={60}
          height={50}
          alt=""
        />
      </div>
      <div className={styles.links}>
        <a href="#details">о нас</a>
        <a href="#form">оставить заявку</a>
        <a href="#footer">контакты</a>
      </div>
      <a href="#form" className={styles.about}>Оставить заявку</a>
    </div>
  )
}