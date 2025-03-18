/**
 * Import: Next
 */
import Image from 'next/image';

/**
 * Import: Styles
 */
import styles from './BannerImages.module.scss';

/**
 * Import: Assets
 */
import CustomArrow from '@/public/images/icons/CustomArrow';
import Dots from '@/public/images/icons/Dots';

/**
 * Import: Libs
 */
import classNames from 'classnames';

/**
 * Import: Animation
 */
import { motion } from 'framer-motion';

export const BannerImages = () => (
    <div className={styles.container}>
        <motion.div
            className={classNames(styles.imageWrapper, styles.firstImage)}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
            <Image src="/images/cards/photo-2.png" alt="image 1" width={500} height={500} />
        </motion.div>
        <motion.div
            className={classNames(styles.imageWrapper, styles.secondImage)}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        >
            <Image src="/images/cards/photo-1.png" alt="image 2" width={500} height={500} />
        </motion.div>
        <motion.div
            className={styles.arrow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
        >
            <CustomArrow />
        </motion.div>
        <motion.div
            className={styles.dots}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
        >
            <Dots />
        </motion.div>
    </div>
);
