import Layout from "../../layouts/pageLayout";
import { ReactElement, ReactFragment } from "react";
import PageSEO from "../../components/seo";
import PostTab from "../../components/tab";
import pl1 from "../../components/skills/pl1";
import pl2 from "../../components/skills/pl2";
import pl3 from "../../components/skills/pl3";

export default function Skills(): ReactElement<ReactFragment> {
  return (
    <Layout footer={false}>
      <PageSEO title="Skills" />

      <div className="mb-3">
        <div className="flex justify-center">
          <div className="mt-7">
            <p className="text-6xl font-bold dark:text-white">Skills</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-center">
            <div className="w-11/12 sm:w-2/3">
              <PostTab title="Programming Languages" description={pl1} />
              <PostTab title="Languages" description={pl2} />
              <PostTab title="Frameworks" description={pl3} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
