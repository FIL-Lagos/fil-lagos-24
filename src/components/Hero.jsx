
const Hero = () => {
  return (
    <div className="hero">
      <div className="lg:w-1/2 mx-auto py-20 text-center">
        <img className="mx-auto w-44" src="/images/hero-logo.png" alt="" />
        <h1 className="lg:text-[90px] my-2 text-5xl">FIL <span className="font-bold">LAGOS</span></h1>
        <p className="lg:text-[32px] text-xl">2 Days of learning, building and having fun</p>
        <div className="flex justify-center my-2">
          <img className="mr-1" src="/images/uil_calender.png" alt="" />
          <p>3rd September - 4th September, 2024</p>
        </div>
        <div className="flex justify-center my-2">
          <img className="mr-1" src="/images/akar-icons_location.png" alt="" />
          <p>The Zone park, Gbagada</p>
        </div>
        <button className="bg-[#0A48C0] text-white rounded-full p-3 my-4 px-10 border-2 border-[#52F4FE]">REGISTER</button>
      </div>
      <div className="flex lg:-mb-52 -mb-16 justify-between">
        <img className="w-[45%]" src="/images/fillagos-1.png" alt="" />
        <img className="w-[45%]" src="/images/fillagos-2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;