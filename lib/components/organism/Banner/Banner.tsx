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

export const Banner = () => (
    <section className={styles.container}>
        <div className={styles.info}>
            <h1 className={styles.title}>Discover And Create NFTs</h1>
            <h4 className={styles.subtitle}>
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs
                And Get a <span> $20 bonus.</span>
            </h4>
            <div className={styles.buttonWrapper}>
                <Button buttonType={ButtonType.PRIMARY}>Explore More</Button>
                <Button buttonType={ButtonType.TERTIARY}>create NFT</Button>
            </div>
            <div className={styles.metricContainer}>
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
            </div>
        </div>
        <BannerImages />
    </section>
);
