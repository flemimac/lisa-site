import Image from "next/image";
import styles from "../styles/func.module.css";

export default function Func() {
    return (
        <section className={styles.func} id='func'>
            <h3 className={styles.func__title}>функционал</h3>
            <div className={styles.func__content}>
                <div className={styles.func__left}>
                    <Image
                        src={'/details-kvar.svg'}
                        width={547}
                        height={480}
                        alt=""
                        className={styles.func__image}
                    />
                </div>
                <div className={styles.func__right}>
                        <div className={styles.func__char}>
                            <div className={styles.char__left}>
                                <Image
                                    src={'/char1.svg'}
                                    width={48}
                                    height={48}
                                    alt=""
                                    className={styles.char__image}
                                />
                            </div>
                            <div className={styles.char__right}>
                                <h4 className={styles.char__title}>Доступ к камерам</h4>
                                <p className={styles.char__text}>Следите за безопасностью с любого устройства</p>
                            </div>
                        </div>

                        <div className={styles.func__char}>
                            <div className={styles.char__left}>
                                <Image
                                    src={'/char2.svg'}
                                    width={48}
                                    height={48}
                                    alt=""
                                    className={styles.char__image}
                                />
                            </div>
                            <div className={styles.char__right}>
                                <h4 className={styles.char__title}>Простота использования</h4>
                                <p className={styles.char__text}>Системой удобно пользоваться любому человеку благодаря геймификации</p>
                            </div>
                        </div>

                        <div className={styles.func__char}>
                            <div className={styles.char__left}>
                                <Image
                                    src={'/char3.svg'}
                                    width={48}
                                    height={48}
                                    alt=""
                                    className={styles.char__image}
                                />
                            </div>
                            <div className={styles.char__right}>
                                <h4 className={styles.char__title}>Безопасность</h4>
                                <p className={styles.char__text}>Все данные хранящиеся на сервере шифруются</p>
                            </div>
                    </div>

                    <div className={styles.func__char}>
                        <div className={styles.char__left}>
                            <Image
                                src={'/char4.svg'}
                                width={48}
                                height={48}
                                alt=""
                                className={styles.char__image}
                            />
                        </div>
                        <div className={styles.char__right}>
                            <h4 className={styles.char__title}>Доступ к камерам</h4>
                            <p className={styles.char__text}>Следите за безопасностью с любого устройства</p>
                        </div>
                    </div>
                </div>
                <Image
                    src={'/funcBg.svg'}
                    width={1703 * 0.9}
                    height={969 * 0.9}
                    alt=""
                    className={styles.func__bg}
                />
            </div>
        </section>
    )
}

