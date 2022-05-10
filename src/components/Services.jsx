import About from "./About"
import { Link } from "react-router-dom"
import multi from '../assets/multi.jpg'
import soulplan from '../assets/soulplan.jpg'

const data = [
  {
    id: 1,
    image: multi,
    title: "Multi Dimensional Healing",
    description: "",
    link: "/multihealing"
  },
  {
    id: 2,
    image: soulplan,
    title: "Soul Plan",
    description: "",
    link: "/soulplan"
  },

]

const Services = () => {
  return (
    <main className="flex flex-col flex-grow items-center mb-5">
      <div className="flex content-center justify-center border-b w-1/2 p-4 font-main text-2xl font-medium tracking-wider text-sky-800">
        <p>SERVICES</p>
      </div>
    <div className="mt-4 grid grid-cols-1 gap-10 justify-items-center md:grid-cols-1 lg:grid-cols-2">

      {data.map((service, idx) => (

        <div className="relative sm:h-96 sm:w-11/12 max-w-3xl rounded-lg overflow-hidden shadow-lg mx-6" key={idx}>
          <Link to={service.link}>
            <img src={service.image} alt="spirit" className="w-full h-full object-cover object-center mix-blend-overlay" />
          </Link>
          <h2 className="absolute w-full py-2.5 bottom-5  inset-x-0 text-white font-main text-3xl font-light text-center tracking-wider leading-4">{service.title}</h2>
        </div>
      ))}
    </div>
    <About/>
</main>
  )
}


export default Services;