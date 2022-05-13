import Header from '../components/Header'
import Services from '../components/Services';
import Footer from '../components/Footer';
import About from '../components/About';
import CTA1 from '../components/CTA1';
import CTA2 from '../components/CTA2'
import CTA3 from '../components/CTA3'

const Landing = () => {
  return ( 
    <div className='flex flex-col h-screen'>
    <Header/>

    <main className="flex flex-col flex-grow items-center mb-5">
    <Services/>
    <CTA1/>
    <About/>
    <CTA2/>
    <CTA3/>
    </main>

    <Footer/>
    
    </div>
   );
}
 
export default Landing;