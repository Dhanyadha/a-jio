import React from 'react';

import styles from '../style/PopularBrands.module.scss';

const PopularBrands = ({ brands = [], title = "Popular Brands" }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
       
      </div>
      <div className={styles.grid}>
        {brands.map((brand) => (
          <div key={brand.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={brand.image || '/brand-placeholder.png'}
                alt={brand.name || 'Brand logo'}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.brandName}>{brand.name || 'Brand Name'}</h3>
              <div className={styles.discountBadge}>
                <span className={styles.discountText}>UP TO</span>
                <span className={styles.discountPercent}>20% OFF</span>
              </div>
              {brand.categories && (
                <div className={styles.categories}>
                  {brand.categories.slice(0, 3).map(category => (
                    <span key={category} className={styles.categoryTag}>{category}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default PopularBrands;