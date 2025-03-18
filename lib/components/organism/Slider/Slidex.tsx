'use client';

/**
 * Import: React
 */
import { FC, useRef, useState } from 'react';

/**
 * Import: Components
 */
import Card from '../../molecula/Card';
import SlickSlider from 'react-slick';

/**
 * Import: Types
 */
import { CardList } from '@/lib/types';

/**
 * Import: Styles
 */
import styles from './Slider.module.scss';

/**
 * Import: Assets
 */
import ArrowIcon from '@/public/images/icons/ArrowIcon';
import { sliderSettings } from './settings';

/**
 * Import: Animation
 */

type SliderProps = {
    items: CardList;
};
export const Slider: FC<SliderProps> = ({ items }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        className: styles.slider,
        ...sliderSettings,
        afterChange: (current: number) => {
            setActiveSlide(current);
        },
    };

    const sliderRef = useRef<SlickSlider | null>(null);

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Weekly - Top NFT</h2>
                <SlickSlider {...settings} ref={sliderRef}>
                    {items.map((card) => (
                        <Card
                            imageUrl={card.imageUrl}
                            bid={card.bid}
                            time={card.time}
                            title={card.title}
                            key={`card-${card.id}`}
                        />
                    ))}
                </SlickSlider>
                <div className={styles.buttonsWrapper}>
                    <button
                        className={styles.prevButton}
                        onClick={handlePrev}
                        disabled={activeSlide === 0}
                    >
                        <ArrowIcon color={activeSlide === 0 ? '#929292' : undefined} />
                    </button>
                    <button
                        className={styles.nextButton}
                        onClick={handleNext}
                        disabled={activeSlide === items.length - 1}
                    >
                        <ArrowIcon
                            color={activeSlide === items.length - 1 ? '#929292' : undefined}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};
