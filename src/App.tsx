import { Routes, Route, Navigate } from 'react-router-dom';
import RecommendedACPage from './pages/RecommendedACPage';

function App() {
  return (
    <Routes>
      <Route path="/recommended-ac" element={<RecommendedACPage />} />
      {/* Default: redirect to 1.5 ton recommendation */}
      <Route path="*" element={<Navigate to="/recommended-ac/?ton=1.5&type=inverter" replace />} />
    </Routes>
  );
}

export default App;
