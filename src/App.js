import './App.scss';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Section1 from './components/Section1/Section1.js';
import Section2 from './components/Section2/Section2.js';
import Section3 from './components/Section3/Section3.js';
import Section4 from './components/Section4/Section4.js';
import Section5 from './components/Section5/Section5.js';

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
      <Section3 
        title={'Conduza e seja seu próprio patrão!'}
      />
      <Section4
        title={'Nossos resultados:'}
      />
      <Section5 
        title={'Operamos em todo Portugal'}
      />
      <Footer />
    </div>
  );
}

export default App;
