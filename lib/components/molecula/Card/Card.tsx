'use client';

/**
 * Import: Next
 */
import Image from 'next/image';

/**
 * Import: React
 */
import { FC } from 'react';

/**
 * Import: Components
 */
import Button from '../Button';

/**
 * Import: Hooks
 */
import { useTimer } from '@/lib/hooks/useTimer';

/**
 * Import: Types
 */
import { ButtonType } from '../Button';

/**
 * Import: Assets
 */
import BidIcon from '@/public/images/icons/BidIcon';

/**
 * Import: Styles
 */
import styles from './Card.module.scss';

/**
 * Import: Libs
 */
import classNames from 'classnames';

type CardProps = {
    time: number; // Время в секундах
    imageUrl: string;
    title: string;
    bid: number;
};

export const Card: FC<CardProps> = ({ time, imageUrl, title, bid }) => {
    const { remainingTime, formatTime } = useTimer({ time });

    return (
        <article className={classNames(styles.cardWrapper)}>
            <div className={styles.imageWrapper}>
                <div className={styles.timer}>{formatTime(remainingTime)}</div>
                <Image src={imageUrl} alt="card image" width={300} height={300} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.infoTitle}>{title}</h3>
                <p className={styles.bidTitle}>Current bid</p>
                <div className={styles.bid}>
                    <BidIcon />
                    <span>{bid}</span>
                </div>
                <Button buttonType={ButtonType.PRIMARY} className={styles.cardButton}>
                    PLACE BID
                </Button>
            </div>
        </article>
    );
};
