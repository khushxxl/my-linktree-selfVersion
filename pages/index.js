import { Twitter, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import Head from "next/head";
import Header from "../components/Header";
import LinkCard from "../components/LinkCard";

export default function Home() {
  return (
    <div className="flex items-center body justify-center flex-col">
      <Head>
        <title>My Links</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="mt-10 mb-20">
        <Header />
      </div>
      <div>
        <LinkCard
          title="Twitter"
          Icon={Twitter}
          href="https://twitter.com/khushaal_04"
        />
        <LinkCard
          title="LinkedIn"
          Icon={LinkedIn}
          href="https://www.linkedin.com/in/khushaal-choithramani-250285208/"
        />
        <LinkCard
          title="Github"
          Icon={GitHub}
          href="https://github.com/khushxxl"
        />
        <LinkCard
          title="Instagram"
          Icon={Instagram}
          href="https://www.instagram.com/khushxxl_04/"
        />
      </div>
    </div>
  );
}
