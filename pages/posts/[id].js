export default function Post({ pageId }) {
  return <div>{pageId}</div>;
}

export async function getStaticPaths() {
  const paths = [{ params: { id: "b" } }, { params: { id: "a" } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // 動的に生成されたパスのうちアクセスされた情報を受け取る
  console.log(params);
  return {
    props: {
      pageId: params.id,
    },
  };
}
