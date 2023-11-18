"use client"
import styles from './back.module.css';
import Image from 'next/image';

const BackImage = ({ children, src, height, opacity = 0 }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: `${height}vh` }}>
            <Image src={src} layout='fill' objectFit='cover' objectPosition='center' />
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: `rgba(255, 255, 255, ${opacity})` }}></div>
            <div style={{ position: 'absolute', zIndex: 1 }}>
                {children}
            </div>
        </div>
    )
}

const HeroImage = ({ children, src, height, opacity }) => {
    return (
        <BackImage src={src} height={height} opacity={opacity} alt='Hero image'>
          {children}
        </BackImage>
    );
  };

export default HeroImage;