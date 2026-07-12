import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/Services/ServicesOverview';
import ServiceDetailTemplate from './pages/Services/ServiceDetailTemplate';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

import services from './data/services';
import './index.css';

function ServiceDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  return <ServiceDetailTemplate service={service} />;
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/about"               element={<About />} />
        <Route path="/services"            element={<ServicesOverview />} />
        <Route path="/services/:slug"      element={<ServiceDetailRoute />} />
        <Route path="/industries"          element={<Industries />} />
        <Route path="/contact"             element={<Contact />} />
        {/* Fallback */}
        <Route path="*"                    element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppLayout />
    </BrowserRouter>
  );
}
