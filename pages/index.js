import Head from "next/head";
import layout from "styles/Layout.module.scss";
import MyHome from "components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Task React</title>
      </Head>

      <main className={layout.container}>
        <MyHome />
      </main>
    </>
  );
}
