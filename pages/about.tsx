import Layout from "../components/layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout footer>
      <Head>
        <title>About | Balaji</title>
      </Head>
      <div className="dark:bg-gray-800 pb-8">
        <div className="pb-3">
          <div className="pt-5 pb-5 flex justify-center">
            <div className="flex lg:justify-center flex-col lg:flex-row font-about w-10/12 sm:w-2/3">
              <h1 className="width">
                <p className="font-semibold text-3xl mt-5 dark:text-blue-400">
                  About
                </p>
                <p className="pt-2 text-lg dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda magnam ad aspernatur molestiae cum nulla ab,
                  repellat omnis impedit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Et, culpa tempore ducimus magnam quibusdam
                  architecto repellat suscipit facere esse fuga ullam eos!
                  Cupiditate, tempora exercitationem. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quasi voluptate vel porro a unde
                  error ut, at excepturi mollitia quia eveniet earum eos aliquid
                  hic, officia necessitatibus, harum fuga saepe! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Culpa, corporis
                  architecto tenetur tempora sapiente aspernatur recusandae.
                  Pariatur fuga sunt assumenda in sequi, hic minima! Totam
                  beatae earum eveniet laudantium voluptate! Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Tempore non ex, autem
                  debitis recusandae officia laudantium a totam voluptatem
                  expedita vitae unde enim nisi impedit deserunt hic quos,
                  commodi suscipit! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Obcaecati quis expedita aut eos consequatur.
                  Ad voluptatem explicabo amet dolorum saepe omnis corrupti
                  natus id aperiam neque? Laborum voluptatibus itaque porro.
                </p>
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex lg:justify-center flex-col lg:flex-row font-about w-10/12 sm:w-2/3">
              <h1 className="width">
                <p className="font-semibold text-3xl mt-5 dark:text-blue-400">
                  Passions
                </p>
                <p className="pt-2 text-lg dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda magnam ad aspernatur molestiae cum nulla ab,
                  repellat omnis impedit. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Et, culpa tempore ducimus magnam quibusdam
                  architecto repellat suscipit facere esse fuga ullam eos!
                  Cupiditate, tempora exercitationem. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Possimus nihil
                  necessitatibus doloribus at, delectus dolorum quam! Sapiente
                  optio et hic ut architecto ipsam dignissimos, doloremque
                  asperiores assumenda rem, ex voluptatum. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Esse quis amet
                  doloremque ab accusamus suscipit. Necessitatibus eos molestiae
                  autem tempora placeat nisi dolorem et hic delectus cumque,
                  possimus quo magnam!
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
