import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <div>
      test
      <div>
        <Link href="/posts/TestPage1">Jump to TestPage1</Link>
      </div>
      <div>
        <Link href="/posts/TestPage2">Jump to TestPage2</Link>
      </div>
      <div>
        <Link href="/posts/TestPage3">Jump to TestPage3</Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
