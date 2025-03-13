/**
 * Import: Styles
 */
import Logo from '@/public/images/icons/Logo';
import styles from './Header.module.scss';
import Button, { ButtonType } from '../../molecula/Button';
import Link from 'next/link';
import MenuIcon from '@/public/images/icons/Menu';
import CloseIcon from '@/public/images/icons/CloseIcon';
import MobileMenu from './MobileMenu/MobileMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

export const Header = () => (
    <header className={styles.headerWrapper}>
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <Logo className={styles.icon} />
                <h4 className={styles.name}>DiveSea</h4>
            </div>

            <DesktopMenu />
            <MobileMenu />
        </div>
    </header>
);
