/**
 * Import: Next
 */
import Link from 'next/link';

/**
 * Import: Styles
 */
import styles from './Footer.module.scss';

/**
 * Import: Assets
 */
import Logo from '@/public/images/icons/Logo';
import InstagramIcon from '@/public/images/icons/InstagramIcon';
import LinkedinIcon from '@/public/images/icons/LinkedinIcon';
import FacebookIcon from '@/public/images/icons/FacebookIcon';
import TwitterIcon from '@/public/images/icons/TwitterIcon';

export const Footer = () => (
    <footer className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <Logo className={styles.icon} color="white" />
                <h4 className={styles.name}>DiveSea</h4>
            </div>

            <ul className={styles.menu}>
                <li>
                    <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#">Term & Conditions</Link>
                </li>
                <li>
                    <Link href="#">About Us</Link>
                </li>

                <li>
                    <Link href="#">Contact</Link>
                </li>
            </ul>

            <hr className={styles.line} />

            <div className={styles.social}>
                <Link href="#">
                    <InstagramIcon />
                </Link>
                <Link href="#">
                    <LinkedinIcon />
                </Link>
                <Link href="#">
                    <FacebookIcon />
                </Link>
                <Link href="#">
                    <TwitterIcon color="white" />
                </Link>
            </div>

            <div className={styles.copyright}>&copy; 2023 EATLY All Rights Reserved.</div>
        </div>
    </footer>
);
