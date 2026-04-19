import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import { FaUsers } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Component/Services";
import assets1 from "./assets/part1.webp";
import assets2 from "./assets/part2.webp";
import Connect from "./Component/Connect.";
import Product from "./Component/Product";
import items from "./assets/Pay.avif";
import items2 from "./assets/appointment.jpg";
import Doc1 from "./assets/Doc1.avif";
import Doc2 from "./assets/Doc2.jpg";
import Doc3 from "./assets/Doc3.avif";
import Doc4 from "./assets/Doc4.avif";
import Doc5 from "./assets/Doc5.avif";
import Doc6 from "./assets/Doc6.avif";
import Doc7 from "./assets/Doc7.avif";
import Doc8 from "./assets/Doc8.avif";
import Doc9 from "./assets/Doc9.avif";
import Doc10 from "./assets/Doc10.avif";
import Trusted from "./Component/Trusted";
import Medical_Packege from "./Packege/Medical_Packege";
import Founder from "./Component/page/Founder";
import Contact from "./Packege/Contact";
import Footer from "./Footer/Footer";
import Register from './Component/page/Register'

const App = () => {
  const features = [
    {
      icon: FaUsers,
      title: "300,000+ Clients Served & Growing",
      desc: "We have served over 300,000 clients and continue growing by delivering trusted, quality healthcare services to patients every single day.",
    },
    {
      icon: FaHospital,
      title: "The Best Medical Facility in the City",
      desc: " Providing advanced, affordable, and compassionate healthcare services in Patna, ensuring quality treatment, expert doctors, modern facilities, and patient-focused care",
    },
    {
      icon: TbJewishStarFilled,
      title: "Reliable & Trustworthy Medical Specialists",
      desc: "Our medical specialists are reliable and trustworthy, providing expert care, accurate diagnosis, and dedicated support to ensure the best treatment for every patient.",
    },
    {
      icon: FaCheckCircle,
      title: "Affordable Medical Packages",
      desc: "We offer a 20% discount on treatments for all types of illnesses, making healthcare more affordable and accessible for every patient",
    },
    {
      icon: IoLogoWhatsapp,
      title: "Best Patient on-call Support",
      desc: "We provide excellent on-call patient support, allowing quick registration, appointment booking, and instant information about any medical service anytime.",
    },
    {
      icon: FaCalendarCheck,
      title: "20+ Years in the Business",
      desc: "With 20+ years of experience, we support poor patients through Ayushman Card treatments and offer 20% discount for others. ",
    },
  ];
  // Array ..2

  const mainContent = [
    {
      title: "Flexible Medical Packages",
      description: "Personalized healthcare plans for all age groups.",
      image: assets1,
      btnBy: "VIEW PACKAGES",
    },
    {
      id: 2,
      title: "Expert Doctors Team",
      description: "Highly experienced doctors for best treatment.",
      image: assets2,
      btnBy: "GET STARTED",
    },
  ];

  const latestProduct = [
    {
      product: "Fever, Cold, Cough",
      title: "Dr. Ajay Kumar (General Physician)",
      description: "Treatment for general health problems and infections",
      image: items,
    },
    {
      product: "Pregnancy, Period Problem",
      title: "Dr. K. Arul (Gynecologist)",
      description: "Women health and pregnancy related treatment",
      image: items2,
    },
    {
      product: "Child Fever, Vaccination",
      title: "Dr. A. K. Singh (Pediatrician)",
      description: "Child healthcare and newborn treatment",
      image: Doc1,
    },
    {
      product: "Bone Fracture, Joint Pain",
      title: "Dr. S. P. Singh (Orthopedic)",
      description: "Bone and joint related problems treatment",
      image: Doc2,
    },
    {
      product: "Heart Disease, BP",
      title: "Dr. Anand Kumar (Cardio Physician)",
      description: "Heart and blood pressure related treatment",
      image: Doc3,
    },
    {
      product: "Migraine, Brain Stroke",
      title: "Dr. A. K. Jha (Neurologist)",
      description: "Brain and nervous system treatment",
      image: Doc4,
    },
    {
      product: "Kidney Problem, Dialysis",
      title: "Dr. R. K. Singh (Nephrologist)",
      description: "Kidney and urine related treatment",
      image: Doc5,
    },
    {
      product: "Acidity, Stomach Pain",
      title: "Dr. Prabhat Kumar (Gastroenterologist)",
      description: "Digestive system and liver treatment",
      image: Doc6,
    },
    {
      product: "Ear Pain, Throat Infection",
      title: "Dr. Rakesh Kumar (ENT Specialist)",
      description: "Ear, nose and throat treatment",
      image: Doc7,
    },
    {
      product: "Kidney Stone, Urine Problem",
      title: "Dr. Santosh Kumar (Urologist)",
      description: "Urinary system treatment",
      image: Doc8,
    },
    {
      product: "Burn, Skin Surgery",
      title: "Dr. Amit Kumar (Plastic Surgeon)",
      description: "Skin and cosmetic surgery",
      image: Doc9,
    },
    {
      product: "Back Pain, Slip Disc",
      title: "Dr. Manoj Kumar (Spinal Surgeon)",
      description: "Spine and back related treatment",
      image: Doc10,
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About features={features} />
        <Services mainContent={mainContent} latestProduct={latestProduct} />
        <Connect />
        <Trusted />
        <Medical_Packege />
        <Founder />
        <Contact />
        <Footer />
        {/* <Product  /> */}
      </div>
    </>
  );
};

export default App;
