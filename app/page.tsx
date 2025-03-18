import Banner from '@/lib/components/organism/Banner';
import CreateAndSellNFT from '@/lib/components/organism/CreateAndSellNFT';
import Slider from '@/lib/components/organism/Slider';
import { cards } from '@/public/data';

export default function Home() {
    return (
        <div>
            <Banner />
            <Slider items={cards} />
            <CreateAndSellNFT />
        </div>
    );
}
