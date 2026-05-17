import React, { useState } from 'react';
import './pages.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hot Drinks', 'Cold Drinks', 'Snacks', 'Desserts'];

  const menuItems = [
    // Hot Drinks
    {
      category: 'Hot Drinks',
      name: 'Masala Chai Latte',
      price: '₹225',
      desc: 'Authentic Indian spices blended with creamy frothed milk.',
      img: '/images/menu-hot-1.webp'
    },
    {
      category: 'Hot Drinks',
      name: 'South Indian Filter Coffee',
      price: '₹195',
      desc: 'Traditional decoction coffee served with foamy milk.',
      img: '/images/menu-hot-2.webp'
    },
    {
      category: 'Hot Drinks',
      name: 'Saffron Pistachio Latte',
      price: '₹345',
      desc: 'Our signature blend with hand-picked saffron and roasted pistachios.',
      img: '/images/menu-hot-3.webp'
    },
    {
      category: 'Hot Drinks',
      name: 'Cappuccino',
      price: '₹245',
      desc: 'Double shot of espresso with equal parts steamed milk and foam.',
      img: '/images/menu-hot-4.webp'
    },
    {
      category: 'Hot Drinks',
      name: 'Hot Dark Chocolate',
      price: '₹285',
      desc: 'Rich 70% dark chocolate with a hint of sea salt.',
      img: '/images/menu-hot-5.webp'
    },

    // Cold Drinks
    {
      category: 'Cold Drinks',
      name: 'Iced Rose Matcha',
      price: '₹375',
      desc: 'Ceremonial grade matcha with organic rose syrup and cold milk.',
      img: '/images/menu-cold-1.webp'
    },
    {
      category: 'Cold Drinks',
      name: 'Cold Brew Nitro',
      price: '₹325',
      desc: '18-hour steep cold brew infused with nitrogen for a creamy finish.',
      img: '/images/menu-cold-2.webp'
    },
    {
      category: 'Cold Drinks',
      name: 'Mango Cardamom Smoothie',
      price: '₹295',
      desc: 'Fresh Alphonso mangoes with a dash of cardamom and yogurt.',
      img: '/images/menu-cold-3.webp'
    },
    {
      category: 'Cold Drinks',
      name: 'Vietnamese Iced Coffee',
      price: '₹275',
      desc: 'Strong coffee served over ice with sweetened condensed milk.',
      img: '/images/vietnamese-coffee.webp'
    },
    {
      category: 'Cold Drinks',
      name: 'Hibiscus Iced Tea',
      price: '₹245',
      desc: 'Refreshing cold tea brewed with dried hibiscus flowers and mint.',
      img: '/images/menu-cold-5.webp'
    },

    // Snacks
    {
      category: 'Snacks',
      name: 'Avocado Sourdough',
      price: '₹425',
      desc: 'Creamy avocado on toasted sourdough with chili flakes and lime.',
      img: '/images/menu-snack-1.webp'
    },
    {
      category: 'Snacks',
      name: 'Paneer Tikka Croissant',
      price: '₹265',
      desc: 'Fusion snack with smoky paneer tikka stuffed in a flaky croissant.',
      img: '/images/menu-snack-2.webp'
    },
    {
      category: 'Snacks',
      name: 'Classic Club Sandwich',
      price: '₹345',
      desc: 'Triple-layered sandwich with fresh veggies, cheese, and pesto.',
      img: '/images/menu-snack-3.webp'
    },
    {
      category: 'Snacks',
      name: 'Hummus & Pita Plate',
      price: '₹315',
      desc: 'Smooth chickpea hummus served with warm whole wheat pita.',
      img: '/images/menu-snack-4.webp'
    },
    {
      category: 'Snacks',
      name: 'Quinoa Salad Bowl',
      price: '₹385',
      desc: 'Healthy mix of quinoa, roasted veggies, and lemon tahini dressing.',
      img: '/images/menu-snack-5.webp'
    },

    // Desserts
    {
      category: 'Desserts',
      name: 'Gulab Jamun Cheesecake',
      price: '₹325',
      desc: 'Fusion dessert combining classic cheesecake with soft gulab jamuns.',
      img: '/images/menu-dessert-1.webp'
    },
    {
      category: 'Desserts',
      name: 'Tiramisu',
      price: '₹365',
      desc: 'Traditional Italian dessert with coffee-soaked ladyfingers.',
      img: '/images/menu-dessert-2.webp'
    },
    {
      category: 'Desserts',
      name: 'Warm Apple Pie',
      price: '₹285',
      desc: 'Classic apple pie served with a scoop of vanilla bean ice cream.',
      img: '/images/menu-dessert-3.webp'
    },
    {
      category: 'Desserts',
      name: 'Fudgy Brownie',
      price: '₹195',
      desc: 'Rich chocolate brownie with walnuts and chocolate ganache.',
      img: '/images/menu-dessert-4.webp'
    },
    {
      category: 'Desserts',
      name: 'Lavender Macarons',
      price: '₹245',
      desc: 'Box of 3 delicate lavender-infused French macarons.',
      img: '/images/menu-dessert-5.webp'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Carefully curated flavors to delight your senses</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="menu-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="menu-card fade-in">
                <div className="menu-img-wrapper">
                  <img src={item.img} alt={item.name} width="400" height="400" loading="lazy" />
                </div>
                <div className="menu-info">
                  <div className="menu-title-price">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Menu;
