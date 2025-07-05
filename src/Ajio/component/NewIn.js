import React from 'react';

import styles from '../style/Newln.module.scss';

const NewIn = ({ items }) => {

  const renamedItems = items.map((item, index) => {
    let newName = item.name;
    switch(index) {
      case 0:
        newName = "Frock";
        break;
      case 1:
        newName = "Chudhirs";
        break;
      case 2:
        newName = "Pants";
        break;
      case 3:
        newName = "Kurts Men";
        break;
      default:
        newName = item.name || "Fashion Item";
    }
    return { ...item, name: newName };
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>New Arrivals</h2>
      <div className={styles.grid}>
        {renamedItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={item.image || '/placeholder-dress.jpg'}
                alt={item.name}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>
              <div className={styles.price}>
                {item.price && <span className={styles.newPrice}>${item.price.toFixed(2)}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default NewIn;