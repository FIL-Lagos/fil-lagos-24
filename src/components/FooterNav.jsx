
const FooterNav = () => {
  return (
    <footer className="bg-[#131744] p-10">
      <div className="lg:flex justify-between">
        <div>
          <img src="/images/footer-logo.png" alt="" />
        </div>
        <div className="flex text-[#F6FBFF] lg:my-0 my-6 lg:w-[30%] justify-between text-sm ">
          <div>
            <p className="my-2">OUR NETWORK</p>
            <p className="my-1">filecoin.io</p>
            <p className="my-1">fil.org</p>
            <p className="my-1">protocol.ai</p>
          </div>
          <div>
            <p className="my-2">ABOUT</p>
            <p className="my-1">Code of Conduct</p>
            <p className="my-1">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="text-xs mt-10 text-[#F6FBFF] text-center">Copyright © 2023 Filecoin Foundation</div>
    </footer>
  );
};

export default FooterNav;