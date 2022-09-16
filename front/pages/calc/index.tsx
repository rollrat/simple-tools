import Head from "next/head";

export default function indexPage() {
  return (
    <div>
      <Head>
        <title>Simple Tools - Calculator</title>
        <meta property="og:title" content={"caclculator"} />
      </Head>
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  return {
    props: {},
  };
}
