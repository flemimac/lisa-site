import Image from "next/image";
import styles from "../styles/formApp.module.css";
import Form from "./Form";

export default function FromApp() {
    return (
        <section className={styles.application} id="form">
            <div>
                <div className={styles.application__h}>
                    <h2>оставить<br></br> заявку</h2>
                </div>
                <div className={styles.application__block}>
                    <div className={styles.application__form}>
                        <Form />
                    </div>
                    <div className={styles.application__grid}>
                        <div className={styles.application__text}>
                            <div>
                                <p>Наши менеджеры оперативно свяжутся с вами в Telegram, ответят на все ваши вопросы и предоставят максимально подробную консультацию</p>
                            </div>
                            <div>
                                <h2>Консультация по вашему проекту</h2>
                                <div className={styles.lisa__underline}>
                                    <Image
                                        src={'/lisa-grid-vector.svg'}
                                        layout="responsive"
                                        width={400}
                                        height={50}
                                        alt="vector"
                                    />
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className={styles.lisa__qr}>
                                <Image
                                    src={'/lisa-grid.svg'}
                                    layout="responsive"
                                    width={800}
                                    height={500}
                                    alt="vector"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}