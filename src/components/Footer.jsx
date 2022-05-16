import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <>

      <footer className="bg-gradient-to-r from-white to-rosebrown-100 p-4 sm:p-6">
      <div className="py-6 px-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center font-main tracking-wider text-rosebrown-500">© 2022 Bruna Makrides.
        </span>
        <div className="flex mt-4 gap-4 space-x-6 sm:justify-center md:mt-0">
            <a href="https://www.whatsapp.com/" className="text-rosebrown-500 text-3xl hover:text-white hover:ease-in transition duration-350 ease-out" rel='noreferrer' target='_blank'>
                <BsWhatsapp/>
            </a>
            <a href="https://www.instagram.com/brunamakrides/" className="text-rosebrown-500 text-3xl hover:ease-in hover:text-white transition duration-350 ease-out" rel='noreferrer' target='_blank'>
                <BsInstagram/>
            </a>
            
        </div>
    </div>
</footer>


    </>
  );
}

export default Footer;