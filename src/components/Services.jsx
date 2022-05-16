import { Link } from "react-router-dom"


const Services = () => {
  return (
    <>
      <div className="flex content-center justify-center border-b w-1/2 p-4 font-main text-2xl font-medium tracking-wider text-rosebrown-300">
        <p>SERVICES</p>
      </div>

      <div className="w-full mt-4 grid grid-cols-1 gap-10 justify-items-center lg:grid-cols-2">

        <Link className="bg-multi bg-cover bg-center h-96 w-11/12 max-w-3xl rounded-lg overflow-hidden shadow-lg mx-6" to="/multihealing">
          <h2 className="w-full py-2.5 bottom-5  inset-x-0 text-white font-main text-3xl font-light text-center tracking-wider leading-4">Multi Dimensional Healing</h2>
        </Link>

        <Link className="bg-soulplan bg-cover bg-center h-96 w-11/12 max-w-3xl rounded-lg overflow-hidden shadow-lg mx-6" to="/soulplan">
          <h2 className="w-full py-2.5 bottom-5  inset-x-0 text-white font-main text-3xl font-light text-center tracking-wider leading-4">Soul Plan</h2>
        </Link>

      </div>
    </>


  )
}


export default Services;