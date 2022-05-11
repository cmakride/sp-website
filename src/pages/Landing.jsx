import Header from '../components/Header'
import Services from '../components/Services';
import Footer from '../components/Footer';
import About from '../components/About';

const Landing = () => {
  return ( 
    <div className='flex flex-col h-screen'>
    <Header/>
    
    <main className="flex flex-col flex-grow items-center mb-5">
    <Services/>
    <About/>
    </main>

    <Footer/>
    
    </div>
   );
}
 
export default Landing;