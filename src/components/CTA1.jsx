const CTA1 = () => {
  return (

    <div className="mt-10 w-full flex content-center justify-center bg-rosebrown-200">
      <div className="max-w-4xl w-7/10 p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center gap-3">
        <div className="m-0  p-0  font-main text-xl lg:text-2xl font-medium tracking-wider text-rosebrown-500 text-center">Request Info or Book a Session</div>
        <p className="m-0  p-0  font-main text-lg lg:text-2xl font-light tracking-wider text-rosebrown-500 text-center">To easily request additional material with detailed information on each of these services, get in touch with me!</p>
        <div className=" mt-3  flex  flex-row  justify-center">

          <a href="https://www.whatsapp.com/" className="p-3  w-64  bg-rosebrown-300 text-lg text-white hover:bg-white hover:text-rosebrown-300 text-center"rel='noreferrer' target='_blank'>Book a Session</a>
        </div>
      </div>
    </div>

  );
}

export default CTA1;