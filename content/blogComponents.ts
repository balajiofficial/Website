import PostH1 from "../mappings/h1";
import PostH2 from "../mappings/h2";
import PostH3 from "../mappings/h3";
import PostH4 from "../mappings/h4";
import PostLink from "../mappings/a";
import PostImage from "../mappings/img";
import PostUnorderedList from "../mappings/ul";
import PostListItem from "../mappings/li";
import PostCode from "../mappings/code";
import PostParagraph from "../mappings/p";
import PostBlockQuote from "../mappings/blockquote";

export const components = {
  p: PostParagraph,
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  a: PostLink,
  img: PostImage,
  ul: PostUnorderedList,
  li: PostListItem,
  code: PostCode,
  blockquote: PostBlockQuote,
};
