import img01 from '../assets/multiHealing/1.jpg'
import img02 from '../assets/multiHealing/2.jpg'
import img03 from '../assets/multiHealing/3.jpg'
import img04 from '../assets/multiHealing/4.jpg'
import img05 from '../assets/multiHealing/5.jpg'
import img06 from '../assets/multiHealing/6.jpg'
import img07 from '../assets/multiHealing/7.jpg'
import img08 from '../assets/multiHealing/8.jpg'

export default function Multihealing() {
  
  
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full justify-center items-center max-w-screen-2xl">
        <img className="w-full" src={img01} alt="" />
        <img className="w-full" src={img02} alt="" />
        <img className="w-full" src={img03} alt="" />
        <img className="w-full" src={img04} alt="" />
        <img className="w-full" src={img05} alt="" />
        <img className="w-full" src={img06} alt="" />
        <img className="w-full" src={img07} alt="" />
        <img className="w-full" src={img08} alt="" />
        
      </div>
    </div>
      
    );
  }