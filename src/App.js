import './App.scss';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Section1 from './components/Section1/Section1.js';
import Section2 from './components/Section2/Section2.js';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Section1 
        title={'Rápido, fácil e justo'}
      />
      <Section2 
        title={'Quem somos nós?'}
        imgSrc={'images/pexels-element-digital-1051071.jpg'}
        imgName={'Mulher a conduzir'}
      />
      <Footer />
    </div>
  );
}

export default App;
