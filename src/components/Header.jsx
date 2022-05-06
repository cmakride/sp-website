import coverImg from '../assets/home.jpg'

const Header = () => {
  return (
    <div className="bg-gradient-to-tl from-yellow-900 to-blue-900 w-full h-96 relative">
      <img src={coverImg} className='w-full h-full object-cover absolute mix-blend-overlay' alt="" />
      <div className='p-24'>
      <h1 className='text-white text-6xl font-bold'>This is a Headline </h1>
      <h2 className='text-white text-3xl font-light'>Some really great stuff goes here</h2>
      </div>

    </div>




  );
}

export default Header;