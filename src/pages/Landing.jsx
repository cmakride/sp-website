import Header from '../components/Header'
import Services from '../components/Services';
import Footer from '../components/Footer';

const Landing = () => {
  return ( 
    <div className='flex flex-col h-screen'>
    <Header/>
    
    <Services/>

    <Footer/>
    
    </div>
   );
}
 
export default Landing;