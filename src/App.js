import { Route, Routes } from 'react-router-dom';

import SymbolPage from './components/Symbols/SymbolPage';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<SymbolPage />} />
      <Route path="/company/:name" element={<ProfileContainer />} />
    </Routes>
  </div>
);

export default App;
