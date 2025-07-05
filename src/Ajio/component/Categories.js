import React from 'react';
import styles from '../style/Categories.module.scss';

const Categories = ({ data, searchTerm }) => {
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Categories</h2>
        {searchTerm && (
          <p className={styles.searchResults}>
            Showing results for: <span>{searchTerm}</span>
          </p>
        )}
      </div>

      {filteredData.length === 0 ? (
        <div className={styles.emptyState}>
         
        </div>
      ) : (
        <div className={styles.categoriesGrid}>
          {filteredData.map((item) => (
            <div key={item.id} className={styles.categoryCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={styles.categoryImage}
                  onError={(e) => {
                    e.target.src = '/images/placeholder-category.jpg';
                  }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.categoryName}>{item.name}</h3>
                <div className={styles.pricing}>
                
                </div>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;