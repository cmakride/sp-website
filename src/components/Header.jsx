import coverImg from '../assets/home.png'

const Header = () => {
  return (
    <header className=" w-full h-96 relative">
      <img src={coverImg} className='w-full h-full object-cover absolute mix-blend-overlay' alt="" />
      <div className='p-24'>
      <h1 className='text-white font-main font-medium text-6xl'>Bruna Farias De Brito</h1>
      <h2 className='text-white font-main text-3xl font-light'>Gaudalupe San Felipe Makrides</h2>
      </div>

    </header>




  );
}

export default Header;