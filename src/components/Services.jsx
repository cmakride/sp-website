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
    <div className="flex flex-col content-center items-center">
      <div className="flex content-center justify-center border-b w-1/2 p-4 font-main text-2xl font-medium tracking-wider text-sky-800">
        <p>SERVICES</p>
      </div>
    <div className="mt-4 grid grid-cols-1 gap-10 justify-items-center md:grid-cols-1 lg:grid-cols-2">

      {data.map((service, idx) => (

        <div className="sm:h-96 sm:w-11/12 max-w-3xl rounded-lg overflow-hidden shadow mx-6" key={idx}>
          <Link to={service.link}>
            <img src={service.image} alt="spirit" className="w-full h-full object-cover object-center" />
          </Link>
        </div>
      ))}



    </div>
</div>
  )
}


export default Services;