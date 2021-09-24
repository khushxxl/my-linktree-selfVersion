/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon } from "@material-ui/core";

const LinkCard = ({ Icon, title, href }) => {
  return (
    <>
      <div
        className="cursor-pointer p-3 items-center 
      rounded-2xl justify-evenly br-20 mt-5 bg-gray-200 
      flex h-24 w-96 transform transition-all duration-150 hover:scale-105 ease-in-out"
      >
        <Icon />
        <Link href={href}>
          <h1 className="font-bold pr-3">{title}</h1>
        </Link>
      </div>
    </>
  );
};

export default LinkCard;
