"use client"
import styles from './back.module.css';
import Image from 'next/image';

const BackImage = ({ children, src, height, opacity = 0, pullUp = 0, cover = false }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: `${height}vh` }}>
            <Image src={src} layout='fill' objectFit={cover ? "cover" : ""} objectPosition='center' style={{ transform: `translateY(-${pullUp}em)`, zIndex: -1}}/>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: `rgba(255, 255, 255, ${opacity})` }}></div>
            <div style={{ position: 'absolute', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
}

const HeroImage = ({ children, src, height, opacity, pullUp, cover }) => {
    return (
        <BackImage src={src} height={height} opacity={opacity} pullUp={pullUp} cover={cover} alt='Hero image'>
          {children}
        </BackImage>
    );
};

export default HeroImage;
