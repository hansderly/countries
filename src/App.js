import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import { HomePage, DetailPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
