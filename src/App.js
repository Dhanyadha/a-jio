import React, { useState } from 'react';
import Header from './Ajio/component/Header';
import Banner from './Ajio/component/Banner';
import Categories from './Ajio/component/Categories';
import PopularBrands from './Ajio/component/PopularBrands';
import Trending from './Ajio/component/Trending';
import NewIn from './Ajio/component/NewIn';
import PromoBanner from './Ajio/component/PromoBanner';
import DiscoverStores from './Ajio/component/DiscoverStores';
import Footer from './Ajio/component/Footer';

import data from './data/products.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <Header onSearch={setSearchTerm} />

      <Banner />

      <section>
        <Categories data={data.categories} searchTerm={searchTerm} />
      </section>

      <section>
        <PopularBrands brands={data.brands} />
      </section>

      <section>
        <Trending items={data.trending} />
      </section>

      <section>
        <NewIn items={data.newIn} />
      </section>

      <PromoBanner />

      <DiscoverStores />

      <Footer />
    </div>
  );
}

export default App;
