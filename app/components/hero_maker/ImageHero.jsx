import styles from './back.module.css';
import Image from 'next/image';

const HeroImage = ({ children, src, height, pullUp = 0, cover = false }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: `${height}vh` }}>
            <Image src={src} layout='fill' objectFit={cover ? true : ""} objectPosition='center' style={{ transform: `translateY(-${pullUp}em)`, zIndex: -1}}/>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default HeroImage;
