/**
 * Import: Components
 */
import MobileMenu from './MobileMenu/MobileMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

/**
 * Import: Assets
 */
import Logo from '@/public/images/icons/Logo';

/**
 * Import: Styles
 */
import styles from './Header.module.scss';

export const Header = () => (
    <header className={styles.wrapper}>
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
