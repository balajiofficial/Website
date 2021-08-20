import Layout from "../../layouts/pageLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import React from "react";
import BlogComponent from "../../layouts/blog";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title + " - Blog | Balaji"}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <BlogComponent>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </BlogComponent>
      </article>
    </Layout>
  );
}
