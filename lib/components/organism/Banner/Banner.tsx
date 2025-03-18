'use client';
/**
 * Import: Components
 */
import BannerImages from '../../molecula/BannerImages';
import Button from '../../molecula/Button';

/**
 * Import: Types
 */
import { ButtonType } from '../../molecula/Button';

/**
 * Import: Styles
 */
import styles from './Banner.module.scss';

/**
 * Import: Animation
 */
import { motion } from 'framer-motion';

export const Banner = () => (
    <section className={styles.container}>
        <div className={styles.info}>
            <p className={styles.over}>OVER 1M CREATORS</p>
            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Discover And Create NFTs
            </motion.h1>
            <motion.h4
                className={styles.subtitle}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs
                And Get a <span> $20 bonus.</span>
            </motion.h4>
            <motion.div
                className={styles.buttonWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                <Button buttonType={ButtonType.PRIMARY}>Explore More</Button>
                <Button buttonType={ButtonType.TERTIARY}>create NFT</Button>
            </motion.div>
            <motion.div
                className={styles.metricContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <div className={styles.metric}>
                    <p className={styles.metricTitle}>430K+</p>
                    <p className={styles.metricValue}>Art Works</p>
                </div>
                <div className={styles.metric}>
                    <p className={styles.metricTitle}>159K+</p>
                    <p className={styles.metricValue}>Creators</p>
                </div>
                <div className={styles.metric}>
                    <p className={styles.metricTitle}>87K+</p>
                    <p className={styles.metricValue}>Collections</p>
                </div>
            </motion.div>
        </div>
        <BannerImages />
    </section>
);
