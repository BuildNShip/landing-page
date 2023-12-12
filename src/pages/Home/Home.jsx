import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import productData from "./product.json";

const Home = () => {
  const [products, setProducts] = useState(productData);
  return (
    <>
      <div className={styles.logo}>
        <img src="/logo.png" alt="BuildNShip" />
      </div>
      <div className={styles.landing_section}>
        <section className={styles.landing}>
          <div className={styles.landing_text}>
            <h1>BUILD · SHIP · REPEAT</h1>
            <h3>
              We promote a culture of speed and quality, emphasizing the
              importance of building and shipping top-notch products in a matter
              of days.
            </h3>
          </div>
        </section>
      </div>

      <div className={styles.cards_section}>
        <h1 className={styles.cards_heading}>Our Products</h1>
        <section className={styles.cards}>
          {products &&
            products.map((product) => (
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.card_content}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <a
                    href={product.link}
                    className={styles.view_product_btn}
                    target="_blank"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
        </section>
      </div>

      <footer>
        <div>
          <img src="/logo.png" alt="Buildnship Logo" />
        </div>
        <div class={styles.social_icons}>
          <a href="https://twitter.com/buildnship" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/buildnship" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/BuildNShip" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:buildnship@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
