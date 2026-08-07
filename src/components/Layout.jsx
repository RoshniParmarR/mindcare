import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AppointmentModal from './AppointmentModal';
import ScrollToTop from './ScrollToTop';
import Preloader from './Preloader';

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // We clone the children and pass the openModal prop to components that might need it
  // But a better way is to pass things via Context or just have the Navbar handle it.

  return (
    <div className="w-full relative">
      <Preloader />
      <ScrollToTop />
      <Navbar onOpenModal={openModal} />
      <main className="w-full relative">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onOpenModal: openModal });
          }
          return child;
        })}
      </main>
      <Footer onOpenModal={openModal} />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Layout;
