/**
 * Import: React
 */
import { FC, useRef } from 'react';

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

type SliderProps = {
    items: CardList;
};
export const Slider: FC<SliderProps> = ({ items }) => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
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
                <button className={styles.prevButton} onClick={handlePrev}>
                    <ArrowIcon />
                </button>
                <button className={styles.nextButton} onClick={handleNext}>
                    <ArrowIcon />
                </button>
            </div>
        </section>
    );
};
