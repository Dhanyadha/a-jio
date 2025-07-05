import React from 'react';
import styles from '../style/Discover.module.scss';

const DiscoverStores = () => {
  const stores = [
    {
      name: "AJIO GOLD",
      description: "Premium fashion for the elite",
      image: "/images/gold.jpg"
    },
    {
      name: "AJIO",
      description: "Trendy styles for everyone",
      image: "/images/ajio.jpg"
    },
    {
      name: "TRENDS",
      description: "Latest fashion trends",
      image: "/images/trends.png"
    },
    {
      name: "INDIE",
      description: "Unique indie brands",
      image: "/images/indie.png"
    }
  ];

  return (
    <div className={styles.discoverStores}>
      <h2 className={styles.title}>Discover Our Online Stores</h2>
      <p className={styles.subtitle}>Explore our curated collections</p>
      
      <div className={styles.storeGrid}>
        {stores.map((store, index) => (
          <div key={index} className={styles.storeCard}>
            <div className={styles.imageContainer}>
              <img 
                src={store.image} 
                alt={store.name} 
                className={styles.storeImage}
                onError={(e) => {
                  e.target.src = '/images/store-placeholder.jpg';
                }}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.storeInfo}>
              <h3>{store.name}</h3>
              <p>{store.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverStores;