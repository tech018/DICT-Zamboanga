import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainMenu from "./pages/components/MainMenu";
import Footer from "./pages/components/Footer";
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OverView from "./pages/OverView";
import Infastructure from "./pages/Infrastructure";
import CostOfDoingBusiness from "./pages/CostOfDoingBusiness";
import BusinessEnvironment from "./pages/BusinessEnvironment";
import Photos from "./pages/Photos";
import LogoArea from "./pages/components/LogoArea";
import NewPhoto from "./pages/NewPhoto";
import NewContact from "./pages/NewContact";
import News from "./pages/News";
import CreateNews from "./pages/CreateNews";
import SingleNews from "./pages/SingleNews";
import { ToastContainer } from "react-toastify";

//auth pages
import Login from "./authpages/Login";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <LogoArea />
        <MainMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/overview" element={<OverView />} />
          <Route path="/about/infrastructure" element={<Infastructure />} />
          <Route path="/photo" element={<Photos />} />
          <Route path="/admin/photo/new" element={<NewPhoto />} />
          <Route path="/admin/contact/new" element={<NewContact />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin/news/create" element={<CreateNews />} />
          <Route path="/news/single/:id" element={<SingleNews />} />
          <Route
            path="/about/businessenvironment"
            element={<BusinessEnvironment />}
          />
          <Route
            path="/about/costofdoingbusiness"
            element={<CostOfDoingBusiness />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
