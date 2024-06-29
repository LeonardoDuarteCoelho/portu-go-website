import './App.scss';
import 'normalize.css'
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Section1 from './components/Section1/Section1.js';
import Section2 from './components/Section2/Section2.js';
import Section3 from './components/Section3/Section3.js';
import Section4 from './components/Section4/Section4.js';
import Section5 from './components/Section5/Section5.js';
import Section6 from './components/Section6/Section6.js';
import Section7 from './components/Section7/Section7.js';


const App = () => {
  return (
    <div className='app'>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <Header />
      <Section1 
        title={'Rápido, fácil e justo'}
      />
      <Section2 
        title={'Quem somos nós?'}
        imgSrc={'images/pexels-element-digital-1051071.jpg'}
        imgName={'Mulher a conduzir'}
      />
      <div className='app__gradient-1'>
        <Section3 
          title={'Conduza e seja seu próprio patrão!'}
        />
        <Section4
          title={'Nossos resultados:'}
        />
      </div>
      <Section5 
        title={'Operamos em todo Portugal'}
      />
      <Section6 />
      <Section7
        title={'Entre em contacto conosco'}
      />
      <Footer />
    </div>
  );
}

export default App;
