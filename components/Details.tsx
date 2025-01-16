import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/details.module.css';
import '../styles/swiper.css'
import Image from 'next/image';

export default function Details() {
    const images = ['/details-kvar.svg', '/details-kvar.svg', '/details-kvar.svg', '/details-kvar.svg'];
    return (
        <section className={styles.details} id="details">
            <div>
                <div className={styles.details__h}>
                    <h2>детали</h2>
                    <Image
                        src={'/hvost.svg'}
                        width={270}
                        height={270}
                        alt=""
                        className={styles.details__image}
                    />
                </div>
                <div className={styles.details__grid}>
                    <div className={styles.details__kvar}>
                        <div className={styles.kvar__container}>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                className={styles.kvar__slider}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            width={580}
                                            height={433}
                                            className={styles.kvar__image}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.grid__block}>
                        <p className={styles.block__p}>
                            Вся аналитика больших данных в невероятно компактном решении
                        </p>
                        <div className={styles.block__grid}>
                            <Image
                                src={'/details-grid.svg'}
                                width={920}
                                height={280}
                                alt=""
                                className={styles.block__drag}
                            />
                            <p className={styles.overlay__text}>
                                Управляй ресурсами эффективно с нашей системой умного мониторинга. Прозрачная аналитика в каждом доме.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}