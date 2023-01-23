import './App.css';
import BarComponent from './components/BarComponent';
import FooterComponent from './components/FooterComponent';
import IntroductionComponent from './components/IntroductionComponent';
import WelcomComponent from './components/WelcomeComponent';

function App() {
  return (
    <div>
      <BarComponent/>
      <main>
        <section>
          <WelcomComponent/>
        </section>
        <section>
          <IntroductionComponent/>
        </section>
        <section>
          <FooterComponent/>
        </section>
      </main>
    </div>
  );
}

export default App;
