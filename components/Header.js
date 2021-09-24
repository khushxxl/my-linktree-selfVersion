import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <h1 className="font-bold text-5xl text-center">
            Hey 👋 , Find Me Here!
          </h1>

          <div className="mt-10 flex sm:justify-evenly sm:flex-row flex-col items-center">
            <div className=" items-center">
              <Avatar
                className=""
                src="https://pbs.twimg.com/profile_images/1425561562740256769/wilUuqQX_400x400.jpg"
              />
            </div>
            <div className="mt-5 sm:m-0 items-center text-center">
              <h1 className="font-bold text-xl">Khushaal Choithramani</h1>
              <p className="font-semibold">Web & App Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
