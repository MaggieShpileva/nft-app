/**
 * Import: Next
 */
import Link from 'next/link';

/**
 * Import: React
 */
import React, { useState } from 'react';

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
import styles from './MobileMenu.module.scss';

/**
 * Import: Assets
 */
import CloseIcon from '@/public/images/icons/CloseIcon';
import MenuIcon from '@/public/images/icons/Menu';
import InstagramIcon from '@/public/images/icons/InstagramIcon';
import LinkedinIcon from '@/public/images/icons/LinkedinIcon';
import FacebookIcon from '@/public/images/icons/FacebookIcon';
import TwitterIcon from '@/public/images/icons/TwitterIcon';

/**
 * Import: Libs
 */
import classNames from 'classnames';

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.mobileMenu}>
            <div className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <CloseIcon width={31.5} height={22.33} />
                ) : (
                    <MenuIcon width={31.5} height={22.33} />
                )}
            </div>

            <div className={classNames(styles.menuContent, isMenuOpen ? styles.open : '')}>
                <ul>
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

                <div className={styles.iconsWrapper}>
                    <InstagramIcon />
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>

                <Button buttonType={ButtonType.PRIMARY} className={styles.mobileConnectButton}>
                    Connect Wallet
                </Button>
            </div>
        </div>
    );
};

export default MobileMenu;
