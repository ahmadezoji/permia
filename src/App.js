import logoTelegram from './telegram.svg';
import logoInstagram from './instagram.svg';
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
        <p>کانال های زیر را دنبال کنید</p>
        <div className="Footer-container">
          <a href='https://t.me/permiaonlineshop/'>
            <img src={logoTelegram} className="Link-logo" alt="telegram" />
          </a>
          <a href='https://www.instagram.com/permia_shop/'>
            <img src={logoInstagram} className="Link-logo" alt="whatsapp" />
          </a>
        </div>

        <div className="Direct_chat_whataspp" onClick={() => window.location.href = 'https://wa.me/989912438641'}>
          <p className="Chat_title">سفارش آنلاین از طریق واتس اپ</p>
        </div>
        <div className="Direct_chat_telegram" onClick={() => window.location.href = 'https://t.me/+989912438641'}>
          <p className="Chat_title">سفارش آنلاین از طریق تلگرام</p>
        </div>
      </header>
    </div>
  );
}

export default App;
