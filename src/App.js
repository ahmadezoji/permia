import logoTelegram from './telegram.svg';
import logoInstagram from './instagram.svg';
import logoWhatsapp from './whatsapp.svg';
import logPng from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logPng} className="App-logo" alt="logo" />
        <p className="App-header-title">
          آنلاین شاپ پرمیا
        </p>
        <p>😍حس قشنگ یه خرید عالی😍</p>
        <p>
          ثبت سفارش و پاسخگویی از طریق دایرکت،
          واتس اپ و تلگرام 🌸
          لطفا فقط یکجا برای ما پیغام بزارید،
          تمام پیامها به ترتیب پاسخ داده میشن.

          👇🏽ثبت سفارش و پاسخگویی 👇🏽

        </p>
        <div className="Footer-container">
          <a href='https://t.me/permiaonlineshop/'>
            <img src={logoTelegram} className="Link-logo" alt="telegram" />
          </a>
          <a href='https://www.instagram.com/permia_shop/'>
            <img src={logoInstagram} className="Link-logo" alt="instagram" />
          </a>
          <a href='https://www.instagram.com/permia_shop/'>
            <img src={logoWhatsapp} className="Link-logo" alt="whatsapp" />
          </a>

        </div>

      </header>
    </div>
  );
}

export default App;
