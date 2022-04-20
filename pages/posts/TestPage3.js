import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  console.log("in swr");
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};
/**
 * テストページ用のコンポーネント
 * クライアント側でデータの取得を行う場合
 */
const TestPage3 = ({ postData, a }) => {
  const { data, error } = useSWR(
    "https://api.clouddirectxr-dev.docomo-cloud.com:8080/healthcheck",
    fetcher
  );
  console.log(postData);
  console.log("props.a: ", a);
  console.log("data: ", data);
  return (
    <div>
      <div>foobar</div>
      <div>{data}</div>
      <div>
        <Link href="/">←back</Link>
      </div>
      <Image src="/images/o.jpg" height={144} width={200} />
    </div>
  );
};

export const getServerSideProps = async (contenxt) => {
  console.log("context: ", contenxt);
  return { props: { b: "this is b" } };
};

export default TestPage3;
