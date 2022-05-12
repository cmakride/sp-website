const CTA1 = () => {
  return (

    <div className="mt-10 w-full  bg-rosebrown-200">
      <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
        <div className=" m-0  p-0  antialiased font-main text-4xl font-medium tracking-wider text-white text-center">Request Info or Book a Session</div>
        <div className="m-0  p-0  antialiased font-main text-2xl font-medium tracking-wider text-white text-center">To easily request additional material with detailed information on each of these services, get in touch with me!</div>
        <div className=" mt-3  flex  flex-row  flex-wrap justify-center  content-center">

          <button className="p-3  w-1/3  bg-rosebrown-300  rounded-lg text-lg text-white hover:bg-white hover:text-rosebrown-300" type="button">Book a Session</button>
        </div>
      </div>
    </div>

  );
}

export default CTA1;