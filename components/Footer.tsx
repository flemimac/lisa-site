import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footer__brand}>Л.И.С.А</div>
            <div className={styles.footer__contacts}>
                <a href="https://t.me/estatecorp" target="__blank">@estatecorp</a>
                <a href="mailto:>estate@email.com">estate@email.com</a>
            </div>
        </footer>
    )
}