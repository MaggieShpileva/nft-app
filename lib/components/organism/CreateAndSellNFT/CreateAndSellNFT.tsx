/**
 * Import: Styles
 */
import Image from 'next/image';
import Button, { ButtonType } from '../../molecula/Button';
import styles from './CreateAndSellNFT.module.scss';

export const CreateAndSellNFT = () => (
    <section className={styles.container}>
        <div className={styles.info}>
            <h2 className={styles.title}>Create and Sell NFTs</h2>
            <p className={styles.subtitle}>World’s Largest NFT Place</p>
            <div className={styles.buttonsWrapper}>
                <Button buttonType={ButtonType.SECONDARY}>Explore More</Button>
                <Button buttonType={ButtonType.QUINARY}>Sell Artwork</Button>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <Image src="/images/cards/photo-2.png " alt="Create and sell NFTs" fill />
        </div>
    </section>
);
