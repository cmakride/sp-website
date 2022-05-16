import { Link } from "react-router-dom"


const Services = () => {
  return (
    <>
      <div className="flex content-center justify-center border-b w-1/2 p-4 font-main text-2xl font-medium tracking-wider text-rosebrown-300">
        <p>SERVICES</p>
      </div>

      <div className="max-w-screen-2xl w-full mt-4 grid grid-cols-1 gap-10 justify-items-center lg:grid-cols-2">

        <Link className="flex bg-multi bg-cover bg-center h-96 w-11/12 max-w-3xl rounded-lg overflow-hidden shadow-lg mx-6" to="/multihealing">
          <div className="flex justify-center gap-3 flex-wrap self-end w-full inset-x-0 text-white font-main text-3xl font-light tracking-wider leading-4 mb-6">
            <p>
              Multi Dimensional
            </p>
            <p>
              Healing
            </p>
          </div>

        </Link>

        <Link className="flex bg-soulplan bg-cover bg-center h-96 w-11/12 max-w-3xl rounded-lg overflow-hidden shadow-lg mx-6" to="/soulplan">
          <h2 className="self-end w-full pb-6 inset-x-0 text-white font-main text-3xl font-light text-center tracking-wider leading-4">Soul Plan</h2>
        </Link>

      </div>
    </>


  )
}


export default Services;