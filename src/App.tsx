import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<LandingPage />} />
        <Route path="restaurants" element={<div className="container mx-auto px-4 py-20 text-white">Restaurant Listings Coming Soon</div>} />
        <Route path="login" element={<div className="container mx-auto px-4 py-20 text-white">Login Page Coming Soon</div>} />
        <Route path="signup" element={<div className="container mx-auto px-4 py-20 text-white">Signup Page Coming Soon</div>} />
        <Route path="*" element={<div className="container mx-auto px-4 py-20 text-white">404 - Not Found</div>} />
      </Route>
    </Routes>
  );
}
