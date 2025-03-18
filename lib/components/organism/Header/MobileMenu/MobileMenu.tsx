'use client';
/**
 * Import: Next
 */
import Link from 'next/link';

/**
 * Import: React
 */
import React, { FC, useState } from 'react';

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
import { motion, AnimatePresence } from 'framer-motion';

type MobileMenuProps = {
    currentBgColor: string;
};
const MobileMenu: FC<MobileMenuProps> = ({ currentBgColor }) => {
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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={classNames(styles.menuContent)}
                        key="menu"
                        initial={{ opacity: 1, y: '-100%', backgroundColor: currentBgColor }}
                        animate={{ opacity: 1, y: 0, backgroundColor: currentBgColor }}
                        exit={{ opacity: 1, y: '-100%' }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
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

                        <Button
                            buttonType={ButtonType.PRIMARY}
                            className={styles.mobileConnectButton}
                        >
                            Connect Wallet
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileMenu;
