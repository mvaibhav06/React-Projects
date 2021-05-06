import './App.css';
import FifthComponent from './components/FifthComponent';
import FirstComponent from './components/FirstComponent';
import FourthComponent from './components/FourthComponent';
import Header from './components/Header';
import ThirdComponent from './components/ThirdComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <FifthComponent /> */}
      
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      {/* <Footer /> */}
      
      <FifthComponent />

    </div>
  );
}

export default App;
