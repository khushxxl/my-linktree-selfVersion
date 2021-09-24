import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <div>
          <h1 className="font-bold text-5xl"> Hey 👋 , Find Me Here! </h1>
          <div className="flex justify-evenly mt-10 pr-10 pl-10">
            <Avatar src="https://pbs.twimg.com/profile_images/1425561562740256769/wilUuqQX_400x400.jpg" />
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl">Khushaal Choithramani</h1>
              <p className="font-semibold">Web and App Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
