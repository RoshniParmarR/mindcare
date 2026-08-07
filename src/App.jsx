import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import GoogleReviews from './components/GoogleReviews';
import OurTeam from './components/OurTeam';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Events from './components/Events';
import MythsFacts from './components/MythsFacts';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import EventDetailPage from './pages/EventDetailPage';

import Layout from './components/Layout';

const HomePage = ({ onOpenModal }) => (
  <>
    <Hero onOpenModal={onOpenModal} />
    <About />
    <WhyChooseUs onOpenModal={onOpenModal} />
    <Services />
    <GoogleReviews />
    <OurTeam onOpenModal={onOpenModal} />
    <Gallery onOpenModal={onOpenModal} />
    <Blog />
    <Events onOpenModal={onOpenModal} />
    <MythsFacts />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/services/:slug" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/events" element={<Layout><EventsPage /></Layout>} />
      <Route path="/events/:slug" element={<Layout><EventDetailPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
    </Routes>
  );
};

export default App;
