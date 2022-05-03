import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainMenu from "./pages/components/MainMenu";
import FooterSection from "./pages/components/Footer";
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
import { useSelector } from "react-redux";
import { Header, Footer, Container, Sidebar, Content } from "rsuite";

//auth pages
import Login from "./authpages/Login";
import AdminMenu from "./pages/components/AdminMenu";
import SideNav from "./pages/components/SideNav";
import Dashboard from "./adminpages/Dashboard";
import Contacts from "./adminpages/Contacts";
import Users from "./adminpages/Users";

//adminPages
import AdminPhotos from "./adminpages/Photos";
import NewsEvents from "./adminpages/NewsEvents";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <ToastContainer />

      <Router>
        <Container>
          {!userInfo && (
            <Header>
              <LogoArea />
              <MainMenu />
            </Header>
          )}

          <Container>
            {userInfo && (
              <Sidebar>
                <SideNav />
              </Sidebar>
            )}
            <Content>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about/overview" element={<OverView />} />
                <Route
                  path="/about/infrastructure"
                  element={<Infastructure />}
                />
                <Route path="/photo" element={<Photos />} />
                <Route path="/admin/photo/new" element={<NewPhoto />} />
                <Route path="/admin/contact/new" element={<NewContact />} />
                <Route path="/admin/news/create" element={<CreateNews />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/single/:id" element={<SingleNews />} />
                <Route path="*" element={<Home />} />
                <Route
                  path="/about/businessenvironment"
                  element={<BusinessEnvironment />}
                />
                <Route
                  path="/about/costofdoingbusiness"
                  element={<CostOfDoingBusiness />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/photos" element={<AdminPhotos />} />
                <Route path="/admin/newsandevents" element={<NewsEvents />} />
                <Route path="/admin/contacts" element={<Contacts />} />
                <Route path="/admin/users" element={<Users />} />
              </Routes>
            </Content>
          </Container>

          <Footer>
            <FooterSection />
          </Footer>
        </Container>
      </Router>
    </div>
  );
};

export default App;
