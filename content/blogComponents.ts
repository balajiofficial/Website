import PostH1 from "../mapping/h1";
import PostH2 from "../mapping/h2";
import PostH3 from "../mapping/h3";
import PostH4 from "../mapping/h4";
import PostLink from "../mapping/a";
import PostImage from "../mapping/img";
import PostUnorderedList from "../mapping/ul";
import PostListItem from "../mapping/li";
import PostCode from "../mapping/code";

export const components = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  a: PostLink,
  img: PostImage,
  ul: PostUnorderedList,
  li: PostListItem,
  code: PostCode,
};
