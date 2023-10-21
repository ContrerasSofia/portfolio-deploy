// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className="container text-center">
      <div className="row justify-content-between  p-3">
        <Header/>
        <Nav />
      </div>
    </div>
      
      <main className="mx-3">
       
        <Outlet />
      </main>

      <Footer/>
    </>
  );
}

export default App;
