import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Balaji</title>
      </Head>

      <div className="mt-12 flex justify-center font-about">
        <Image
          src="/profile.png"
          alt="Profile"
          className="rounded-full"
          width={246}
          height={258}
        />
        <p className="width pl-9">
          <h1 className="font-semibold text-2xl mt-7">About</h1>
          <h2 className="pt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            magnam ad aspernatur molestiae cum nulla ab, repellat omnis impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, culpa
            tempore ducimus magnam quibusdam architecto repellat suscipit facere
            esse fuga ullam eos! Cupiditate, tempora exercitationem. Eligendi
          </h2>
        </p>
      </div>
    </Layout>
  );
}
