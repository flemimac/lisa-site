import Image from "next/image";
import styles from "../styles/title.module.css";

export default function Title() {
    return(
        <section className={styles.heading}>
        <div className={styles.heading__h}>
          <h1>Л.И.С.А</h1>
          <div className={styles.heading__image}>
            <Image
              src={'/left-icon.svg'}
              width={287}
              height={287}
              alt=""
            />
          </div>
        </div>
        <div className={styles.heading__b}>
          <Image
            src={'/heading-swipe.svg'}
            width={1800}
            height={100}
            alt=""
            className={styles.no__drag}
          />
          <Image
            src={'/heading-swipe-smart.svg'}
            width={1800}
            height={100}
            alt=""
            className={styles.no__drag_s}
          />
        </div>
      </section>
    )
  }