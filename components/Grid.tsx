import Image from "next/image";
import styles from "../styles/grid.module.css";

export default function Grid() {
    return (
        <section className={styles.grid__qr}>
            <div>
                <div className={styles.grid__image}>
                    <Image
                        src={'/grid-qr.svg'}
                        alt=""
                        layout="responsive"
                        width={690}
                        height={408}
                        className={styles.grid__grid}
                    />
                    <a href="#form">УЗНАТЬ БОЛЬШЕ</a>
                    <div className={styles.arr}>
                        <Image
                            src={'/arr.svg'}
                            alt=''
                            layout="responsive"
                            width={30}
                            height={26}
                            className={styles.arr__image}
                        />
                    </div>
                    <p>локальная индивидуальная система администрирования</p>
                </div>

            </div>
            <div className={styles.grid__video}>
                <video width="628" height="403" muted autoPlay preload="none" loop className={styles.roundedImage}>
                    <source src="/lisa.mp4" type="video/mp4" />
                    Браузер не поддерживает видео
                </video>
                {/* <Image
                    src={'/image-house.svg'}
                    alt=""
                    layout="responsive"
                    width={628}
                    height={403}
                    className={styles.roundedImage}
                /> */}
            </div>
        </section>
    )
}

