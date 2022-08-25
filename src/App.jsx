import logo from './logo.svg';
import './App.css';
import TopNav from './components/topnav/topnav';
import Sidenav from './components/Sidenav/sidenav';
import Cards from './components/cards/cards';

function App() {
  return (
    <body>
     <TopNav/>
     <div className='maindiv'>
      <div className='subdiv1'>
        <Sidenav />
      </div>
      <div className='subdiv2'>
        <Cards />
      </div>
      
     </div>
     
    </body>
  );
}

export default App;
