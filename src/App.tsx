import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import NetworkTopologyPage from './pages/Topology';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topological-view" element={<NetworkTopologyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;