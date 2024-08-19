/* eslint-disable react/prop-types */

const SpeakersCard = ({speaker}) => {
  return (
    <div className='lg:w-[32%] w-full my-4 rounded-[40px] border-2 border-[#3679FB]'>
      <img className="w-full h-96 object-cover object-top	 rounded-t-[40px]" src={`/images/speakers/${speaker.image}`} alt="" />
      <div className="p-6">
        <p className="text-[20px]">{speaker.name}</p>
        <p className="text-[14px] my-1">{speaker.role}</p>
        {/* <p className="text-[14px]">Protocol Labs</p> */}
      </div>
    </div>
  );
};

export default SpeakersCard;