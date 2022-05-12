import coverImg from '../assets/home.png'

const Header = () => {
  return (
    <header className=" w-full h-96 relative">
      <img src={coverImg} className='w-full h-full object-cover absolute mix-blend-overlay' alt="" />
      <div className='flex p-24'>
      <h1 className='text-3xl text-white font-main font-medium lg:text-6xl'>Start Your New Journey</h1>
      
      </div>

    </header>




  );
}

export default Header;