const Header = () => {
  return (
    <div id="header" className="min-h-[700px] ">
      <div className="flex flex-col justify-center min-h-[inherit]">
        <div className="flex justify-center items-center self-center">
          <p
            className="text-[100px] font-extrabold uppercase tracking-[5px]"
            style={{ wordSpacing: 10 }}
          >
            Ashish Kr. Mahto
          </p>
        </div>

        <div className="flex justify-center items-center self-center">
          <p
            className="text-2xl font-extralight uppercase tracking-[2px]"
            style={{ wordSpacing: 10 }}
          >
            Designer | Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
