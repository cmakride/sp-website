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
    <div className="grid grid-cols-1 gap-4 mx-5 justify-items-center md:grid-cols-2 lg:grid-cols-2">

      {data.map((service, idx) => (

        <div className="h-96 w-96 max-w-xs border-2 border-gray-200 border-opacity-600 rounded-lg overflow-hidden bg-gradient-to-r from-light-100 to-dark-100" key={idx}>
          <Link to={service.link}>
            <img src={service.image} alt="spirit" className="w-full h-80 object-cover object-center" />
          </Link>
        </div>



      ))}



    </div>

  )
}


export default Services;