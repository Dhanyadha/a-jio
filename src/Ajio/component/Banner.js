import React, { useState, useEffect, useCallback } from 'react';
import styles from '../style/Banner.module.scss';

const Banner = () => {
  const banners = [
    {
      title: "Sponsor's Spotlight",
      subtitle: "Ready Deal",
      logo: "Deal",
      cta: "SHOP NOW",
      image: "/images/big sale.png"
    },
    {
      title: "Summer Collection",
      subtitle: "New Arrivals 2025",
      logo: "Arrivals",
      cta: "EXPLORE",
      image: "/images/big sale1.jpg"
    },
    {
      title: "Limited Time Offer",
      subtitle: "60% OFF Selected Items",
      logo: "OFFER",
      cta: "GRAB DEAL",
      image: "/images/big sale2.png"
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = useCallback(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval);
  }, [nextBanner]);

  return (
    <div className={styles.banner}>
      <div className={styles.slideContent}>
        <div className={styles.textContent}>
          <h3 className={styles.sponsorTag}>{banners[currentBanner].title}</h3>
          <h2 className={styles.subtitle}>{banners[currentBanner].subtitle}</h2>
          {banners[currentBanner].logo && (
            <div className={styles.logo}>{banners[currentBanner].logo}</div>
          )}
          
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={banners[currentBanner].image} 
            alt={banners[currentBanner].title} 
            className={styles.bannerImage}
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>
      </div>

      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentBanner ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentBanner(index)}
            aria-label={`Go to slide`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;