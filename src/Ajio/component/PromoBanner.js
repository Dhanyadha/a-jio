import React from 'react';
import styles from '../style/PromoBanner.module.scss';

const PromoBanner = () => {
  return (
    <div className={styles.promoBanner}>
      <div className={styles.bannerContainer}>
        <div className={styles.textContent}>
          
          <p className={styles.fashionText}><br/>FOR THE FASHION ICON IN YOU</p>
          <div className={styles.discountBadge}>40-80% OFF</div>
          <p className={styles.stats}>15,00,000+ Styles | 5000+ Brands</p>
          <button className={styles.shopNowBtn}>SHOP NOW</button>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src="/images/sales.jpg" 
            alt="Fashion Promotion" 
            className={styles.promoImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;