import imgDesktop from './images/image-product-desktop.jpg';
import imgMobile from './images/image-product-mobile.jpg';
import iconCart from './images/icon-cart.svg';

import './style.css';

function App() {
  return (
    <div className="flex flex-justcont-c flex-alignitems-c main">
      <div className="flex main-flex main-box">
        <img src={imgDesktop} alt="" className="main-img none-mobile"></img>  
        <img src={imgMobile} alt="" className="main-img none-desktop"></img>
        <div className="text">
          <p className="text-tag">PERFUME</p>
          <p className="text-title">Gabrielle Essence Eau<br className="none-mobile"></br> De Parfum</p>
          <p className="text-desc">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex flex-alignitems-c text-prices">
            <p className="text-price">$149.99</p>
            <p className="text-real"><del>$169.99</del></p>
          </div>
          <a href="#"><div className="flex flex-justcont-c flex-alignitems-c button">
            <img src={iconCart} alt=""></img>
            <p>Add to Cart</p>
          </div></a>
        </div>
      </div>
    </div>
  );
}

export default App;
