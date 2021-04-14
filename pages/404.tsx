import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function FourOFour() {
  return (
    <Layout>
      <Head>
        <title>Error 404 | Balaji</title>
      </Head>
      <p
        className={
          "flex justify-center align-middle mt-60 text-4xl font-extrabold text-center"
        }
      >
        Error 404 Page Not Found
      </p>
      <div className="mt-5 flex justify-center">
        <Link href="/">
          <button className="p-3 bg-blue-600 text-white hover:shadow-lg rounded-lg text-lg  hover:bg-blue-500">
            Return to Home Page
          </button>
        </Link>
      </div>
    </Layout>
  );
}
