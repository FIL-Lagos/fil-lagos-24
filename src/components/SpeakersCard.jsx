
const SpeakersCard = () => {
  return (
    <div className='lg:w-[32%] my-4 rounded-[40px] border-2 border-[#3679FB]'>
      <img className="w-full rounded-t-[40px]" src="/images/speaker.png" alt="" />
      <div className="p-6">
        <p className="text-[20px]">Juan Benet</p>
        <p className="text-[14px] my-1">Founder and CEO</p>
        <p className="text-[14px]">Protocol Labs</p>
      </div>
    </div>
  );
};

export default SpeakersCard;