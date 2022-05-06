import coverImg from '../assets/home.png'

const Header = () => {
  return (
    <div className=" w-full h-96 relative">
      <img src={coverImg} className='w-full h-full object-cover absolute mix-blend-overlay' alt="" />
      <div className='p-24'>
      <h1 className='text-white font-main font-medium text-6xl'>This is a Headline </h1>
      <h2 className='text-white font-main text-3xl font-light'>Some really great stuff goes here</h2>
      </div>

    </div>




  );
}

export default Header;