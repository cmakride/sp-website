import me from '../assets/about.jpg'
import { MdDoubleArrow } from 'react-icons/md'

const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center overflow-hidden w-full gap-10 py-16 max-w-7xl'>

      <img className="rounded-lg shadow-lg sm:w-10/12 max-w-xl" src={me} alt="" />

      <div className="max-w-2xl mx-10 lg:mx-0 flex flex-col items-center">
        <h2 className="font-main text-4xl font-medium tracking-wider text-sky-800 ">Meet Bruna</h2>
        <p className="mt-6 font-main text-2xl font-light tracking-wider">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        <p className="mt-6 font-main text-2xl font-light tracking-wider">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
        <div className='w-full mt-4 flex items-center h-10 justify-center gap-3'>
        <span className="block h-px w-2/5 bg-sky-800"></span>
        <MdDoubleArrow className='text-3xl text-sky-800 rotate-90'/>
        <span className="block h-px w-2/5 bg-sky-800"></span>
        </div>
        <p className="mt-6 font-main text-2xl font-light tracking-wider"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
      </div>




    </div>

    

  );
}

export default About;