import { Fragment } from 'react'
import './App.css'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import SpeakersCard from './components/SpeakersCard'
import Hero from './components/Hero'

function App() {
  const topics = [
    "Decentralized Storage Solutions with Filecoin",
    "AI Integration within the Filecoin Ecosystem",
    "Sustainable Development through Decentralized Technologies",
    "Leveraging Filecoin for Digital Economy Transformation",
    "Innovative Use Cases of Filecoin in Africa",
    "Opportunities for Startups within the Filecoin Ecosystem",
    "The Future of Data Economy with Filecoin",
    "Building on Filecoin Virtual Machine (FVM)",
    "Empowering Women in Web3 and Blockchain Technologies",
    "Funding and Grant Opportunities in the Filecoin Ecosystem",
    "Practical Applications of Decentralized Storage in Various Industries",
    "Connecting the African Tech Community through Decentralization",
    "Enhancing Project Security and Efficiency with Filecoin",
    "Filecoin's Role in the Evolving Digital Landscape",
    "Panel Discussions with Industry Leaders and Innovators",
    "The FVM Imaginarium: Developer Tooling, Hackathons and other Opportunities for Builders",
    "Hacking the Filecoin Ethereum Virtual Machine (FEVM)",
    "The markets & data layer on Filecoin",
    "Deploying the InterPlanetary File System (IPFS) in space",
    "Integration with DeFi",
    "Filecoin cross-chain interoperability",
    "Building Wallets",
    "NFT Storage"
  ];

  return (
    <Fragment>
      <HeaderNav />
      <main className='text-white'>
        <Hero />
        <div id='about' className='lg:flex lg:pt-40 pt-16 pb-20 bg-[#131744] justify-between'>
          <div className='my-auto lg:order-1 lg:w-[60%] lg:p-10 p-6'>
            <p className='text-[30px]'>ABOUT</p>
            <h1 className='lg:text-[50px] text-5xl font-bold my-2'>FIL LAGOS</h1>
            <p className='lg:text-[20px]'>At FIL-Lagos.io, we will explore the transformative potential of decentralized storage and AI integration within the Filecoin ecosystem. This event is designed to provide insights into how these technologies are redefining the digital economy, driving sustainable growth, and creating new opportunities for innovation in Africa.            </p>
          </div>
          <div className='lg:w-[40%] lg:order-0 my-auto'>
            <img src="/images/about-img.png" alt="" />
          </div>
        </div>
        <section id='sponsors' className='lg:p-20 p-6 bg-[#090B22]'>
          <div>
            <p className='text-[30px]'>MEET OUR</p>
            <h1 className='lg:text-[50px] text-5xl font-bold my-3'>Sponsors</h1>
          </div>
          <div className='lg:flex justify-between lg:w-1/2 mx-auto'>
            <img className='lg:w-44 w-32 mx-auto' src="/images/sponsors/img1.png" alt="" />
            <img className='lg:h-54 lg:my-0 my-10 w-40 mx-auto' src="/images/sponsors/img2.png" alt="" />
          </div>
          <img className='mx-auto my-10 w-32' src="/images/sponsors/img3.png" alt="" />
          <img className='mx-auto w-80' src="/images/sponsors/img4.png" alt="" />
          <a href="mailto:info@filecoin.africa">
            <div className='text-center p-8'>
              <button className="bg-[#0A48C0] text-white rounded-full p-3 px-10 border-2 border-[#52F4FE]">BECOME A SPONSOR</button>
            </div>
          </a>
        </section>
        {/* <section className='lg:p-20 p-6 bg-[#090B22]'>
          <div>
            <p className='text-[30px] text-[#F1BE07]'>EXPLORE</p>
            <h1 className='lg:text-[50px] text-5xl  font-medium my-3'>FIL Lagos Event</h1>
          </div>
          <div className='border-2 my-8 border-[#3679FB] p-10 rounded-[40px] lg:flex justify-between'>
            <div>
              <p className='text-[#F1BE07] text-[24px]'>September 3rd</p>
              <p className='text-[14px]'>The zone park, Gbagada</p>
            </div>
            <div className='lg:w-1/2'>
              <p className='text-[#0CDD92] my-1 text-[30px]'>Day1 Building on Filecoin and FVM, Hit the road running </p>
              <p className='text-[14px]'>Join us as we kick start the event  and get busy with building and understanding more about Filecoin visual machine</p>
            </div>
            <img className='h-10 my-1' src="/images/launch-link-open.png" alt="" />
          </div>
          <div className='border-2 my-8 border-[#3679FB] p-10 rounded-[40px] lg:flex justify-between'>
            <div>
              <p className='text-[#F1BE07] text-[24px]'>September 4th</p>
              <p className='text-[14px]'>The zone park, Gbagada</p>
            </div>
            <div className='lg:w-1/2'>
              <p className='text-[#0CDD92] my-1 text-[30px]'>Day2 Building on Filecoin, making money from filecoin storage  </p>
              <p className='text-[14px]'>Learn with us how to make money from filecoin and also explore the numerous financial opportunities in the ecosystem</p>
            </div>
            <img className='h-10 my-1' src="/images/launch-link-open.png" alt="" />
          </div>
        </section> */}
        <section id='speakers' className='lg:p-20 p-6 bg-[#131744]'>
          <div>
            <p className='text-[30px] text-[#F1BE07]'>DISCOVER</p>
            <h1 className='lg:text-[50px] text-5xl font-medium my-3'>FIL Lagos Speakers</h1>
          </div>
          <div className='flex flex-wrap justify-between'>
            <SpeakersCard />
            <SpeakersCard />
            <SpeakersCard />
            <SpeakersCard />
          </div>
          <div className='flex justify-center mt-6'>
            <a href="https://bit.ly/fil-speaker" target='_blank'>
              <button className="bg-[#0A48C0] text-white rounded-full p-3 px-10 border-2 border-[#52F4FE]">BECOME A SPEAKER</button>
            </a>
          </div>
        </section>
        <section id='agenda' className='lg:p-20 p-6 bg-[#090B22]'>
          <div>
            <p className='text-[30px] text-[#F1BE07]'>JOIN US</p>
            <h1 className='lg:text-[50px] text-5xl font-medium my-3'>FIL Lagos Schedule</h1>
          </div>
          <div className='my-4'>
            {/* <button className='bg-[#0CDD92] border-2 border-[#0CDD92] p-3 rounded-xl lg:w-auto w-full my-1 px-8'>Day1 , 3rd September</button> */}
            {/* <button className='border-2 border-[#0CDD92] p-3 rounded-xl lg:ml-4 lg:w-auto my-1 w-full px-8'>Day2 , 4th September</button> */}
          </div>
          {topics.map((topic, index) => <div key={index} className='border-2 my-8 border-[#3679FB] p-10 rounded-[40px] lg:flex justify-between'>
            <div>
              {/* <p className='text-[#F1BE07] text-[24px]'>9am</p> */}
              <p className='text-[20px]'>The Zone Tech</p>
            </div>
            <div className='lg:w-[70%]'>
              <p className='text-[#0CDD92] my-1 text-[30px]'>{topic}</p>
              {/* <p className='text-[14px]'>Join us as we kick start the event  and get busy with building and understanding more about Filecoin visual machine</p> */}
            </div>
          </div>)}

          {/* <div className='border-2 my-8 border-[#3679FB] p-10 rounded-[40px] lg:flex justify-between'>
            <div>
              <p className='text-[#F1BE07] text-[24px]'>9:30am</p>
              <p className='text-[14px]'>The zone park, Gbagada
              </p>
            </div>
            <div className='lg:w-[60%]'>
              <p className='text-[#0CDD92] my-1 text-[30px]'>Registration and materials collection </p>
              <p className='text-[14px]'>Learn with us how to make money from filecoin and also explore the numerous financial opportunities in the ecosystem</p>
            </div>
          </div> */}
        </section>
      </main>
      <FooterNav />
    </Fragment>
  )
}

export default App
