import Head from "next/head";

export default function PageSEO({ title = "", index = false }) {
  return (
    <div>
      {index ? (
        <Head>
          <title>Balaji&apos;s Website</title>
        </Head>
      ) : (
        <Head>
          <title>{title} | Balaji&apos;s Website</title>
        </Head>
      )}
    </div>
  );
}
