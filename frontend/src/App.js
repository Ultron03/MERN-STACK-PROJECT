import logo from './logo.svg';
import './App.css';

//Components---
import HOME from './COMPONENTS/Home/home';
import Header from './header/header';



function App() {
  return (
    <div><Header/>
      <div style={{marginTop:100}}>
        <HOME/>
        
      </div>
    </div>
  );
}

export default App;
