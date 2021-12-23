import React from 'react'
import Header from './commonComponents/header/Header';
import HeaderSection from '../src/pages/home/headerSection/HeaderSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoPictures from '../src/pages/home/LogoPictures/logoPictures';
import HostingService from '../src/pages/home/hostingService/HostingService';
import TaxApplication from '../src/pages/home/TaxApplication/taxApplication';
import Questions from '../src/pages/home/questions/Questions';
import AceHosting from '../src/pages/home/aceHosting/AceHosting'
import CustomerTestimonials from '../src/pages/home/customerTestimonials/CustomerTestimonials'
function App() {
  return (
    <div >

      <HeaderSection />
      <LogoPictures />
      <HostingService />
      <TaxApplication />
      <Questions />
      <AceHosting />
      <CustomerTestimonials />
    </div>
  );
}

export default App;
