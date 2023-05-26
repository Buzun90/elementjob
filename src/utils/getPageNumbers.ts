import { CONFIG } from "site.config.mjs";

const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(CONFIG?.news?.postsPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }
  return pageNumbers;
};

export default getPageNumbers;