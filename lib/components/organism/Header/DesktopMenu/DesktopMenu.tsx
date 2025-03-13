/**
 * Import: Next
 */
import Link from 'next/link';

/**
 * Import: Components
 */
import Button from '../../../molecula/Button';

/**
 * Import: Types
 */
import { ButtonType } from '../../../molecula/Button';

/**
 * Import: Styles
 */
import styles from './DesktopMenu.module.scss';

export const DesktopMenu = () => (
    <>
        <ul className={styles.menu}>
            <li>
                <Link href={''}>Discover</Link>
            </li>
            <li>
                <Link href={''}>creators</Link>
            </li>
            <li>
                <Link href={''}>Sell</Link>
            </li>

            <li>
                <Link href={''}>stats</Link>
            </li>
        </ul>
        <Button buttonType={ButtonType.PRIMARY} className={styles.connectButton}>
            Connect Wallet
        </Button>
    </>
);
