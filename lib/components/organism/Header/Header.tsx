'use client';
/**
 * Import: React
 */
import { useEffect, useState } from 'react';

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

/**
 * Import: Animation
 */
import { motion } from 'framer-motion';
export const Header = () => {
    const bgLight = '#f9f9f9';
    const bgWhite = '#fff';

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 88) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={styles.wrapper}
            initial={{ backgroundColor: bgLight }}
            animate={{ backgroundColor: isScrolled ? bgWhite : bgLight }}
            transition={{
                type: 'spring',
                duration: 0.8,
                ease: 'easeInOut',
            }}
        >
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo className={styles.icon} />
                    <h4 className={styles.name}>DiveSea</h4>
                </div>

                <DesktopMenu />
                <MobileMenu currentBgColor={isScrolled ? bgWhite : bgLight} />
            </div>
        </motion.header>
    );
};
