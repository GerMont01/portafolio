import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/home';
import Work from './pages/work/work';
import About from './pages/about/about';
// import Contact from './pages/contact/contact';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Project from './pages/project/project';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/work" element={<Work />} />
          <Route path="/portfolio/work/:name" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
