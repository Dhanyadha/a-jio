import React from 'react';

import styles from '../style/Trending.module.scss';

const Trending = ({ items = [], title = "Trending Now" }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={item.image || '/placeholder-image.jpg'}
                alt={item.title || 'Trending item'}
                className={styles.image}
                loading="lazy"
              />
              {item.isNew && <span className={styles.badge}>New</span>}
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{item.title || 'Product Name'}</h3>
              {item.price && (
                <div className={styles.price}>
                  <span className={styles.currentPrice}>${item.price.toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className={styles.originalPrice}>${item.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              )}
              {item.rating && (
                <div className={styles.rating}>
                  ⭐ {item.rating.toFixed(1)}
                  {item.reviewCount && <span> ({item.reviewCount})</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Trending;