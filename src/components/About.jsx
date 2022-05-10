import me from '../assets/about.jpg'

const About = () => {
  return (
    <div className='overflow-hidden mx-6 w-full py-16'>
      
        <div className="m-auto px-6">
          <div className="space-y-6 lg:space-y-0 lg:flex lg:gap-12 lg:items-center">
            <div className="lg:w-5/12">
              <img className="rounded-lg shadow-lg" src={me} alt="" />
            </div>
            <div className="lg:w-6/12 flex flex-col items-center">
              <h2 className="font-main text-4xl font-medium tracking-wider text-sky-800 ">Meet Bruna</h2>
              <p className="mt-6 font-main text-2xl font-light tracking-wider">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p className="mt-6 font-main text-2xl font-light tracking-wider"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
              <p className="mt-6 font-main text-2xl font-light tracking-wider">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p className="mt-6 font-main text-2xl font-light tracking-wider"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
            </div>
          </div>
        </div>
      

    </div>

  );
}

export default About;