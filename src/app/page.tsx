'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header";
import './../../styles/font.css';
import Form from "../../components/Form";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <header>
          <Header />
        </header>

        <main>
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
            <div className={styles.grid__image}>
              <Image
                src={'/image-house.svg'}
                alt=""
                layout="responsive"
                width={628}
                height={403}
                className={styles.roundedImage}
              />
            </div>
          </section>


          <section className={styles.details} id="details">
            <div>
              <div className={styles.details__h}>
                <h1>детали</h1>
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
                  <Image
                    src={'/details-kvar.svg'}
                    alt=""
                    width={580}
                    height={433}
                    className={styles.kvar__image}
                  />
                </div>
                <div className={styles.grid__block}>
                  <p className={styles.block__p}>Вся аналитика больших данных в невероятно компактном решении</p>
                  <div className={styles.block__grid}>
                    <Image
                      src={'/details-grid.svg'}
                      width={920}
                      height={280}
                      alt=""
                      className={styles.block__drag}
                    />
                    <p className={styles.overlay__text}>Управляй ресурсами эффективно с нашей систeмой умного мониторинга. Прозрачная аналитика в каждом доме.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className={styles.func}>

          <h3 className={styles.func__title}>функционал</h3>



        </section> */}

          <section className={styles.application} id="form">
            <div>
              <div className={styles.application__h}>
                <h1>оставить<br></br> заявку</h1>
                <Image
                  src={'/vector.svg'}
                  width={292}
                  height={200}
                  alt=""
                  className={styles.application__image}
                />
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
        </main>


      </div>

      <footer className={styles.footer} id="footer">
        <div className={styles.footer__brand}>Л.И.С.А</div>
        <div className={styles.footer__contacts}>
          <a href="https://t.me/estatecorp" target="__blank">@estatecorp</a>
          <a href="mailto:>estate@email.com">estate@email.com</a>
        </div>
      </footer>
    </>
  );
}
