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

export const BannerImages = () => (
    <div className={styles.container}>
        <div className={classNames(styles.imageWrapper, styles.firstImage)}>
            <Image src="/images/cards/photo-2.png" alt="image 1" width={500} height={500} />
        </div>
        <div className={classNames(styles.imageWrapper, styles.secondImage)}>
            <Image src="/images/cards/photo-1.png" alt="image 2" width={500} height={500} />
        </div>
        <CustomArrow className={styles.arrow} />
        <Dots className={styles.dots} />
    </div>
);
