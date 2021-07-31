import { useState } from 'react';
import Chart from './components/Chart/Chart';
import Table from './components/Table';
import NoInternetModal from './components/NoInternetModal';
import CookieBanner from './components/CookieBanner';
import './styles/index.scss';

const App = () : any => {
  const [mode, setMode] = useState<string>('online')

  window.addEventListener('offline', () => {
    setMode('offline');
  });

  return (
    <div className="main-container">
      <CookieBanner />
      <div className="wrapper-container">
        <div className="main-header">
          <h1 className="title">Charts and Table Visualization</h1>
        </div>
        <Chart />
        <Table />
      </div>
      {mode === 'offline' && <NoInternetModal setMode={setMode} />}
    </div>
  );
}

export default App;
