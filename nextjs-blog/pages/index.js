import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ margin: "auto" }}>
        <h1 className={styles.title}>
          <a>Welcome to 3D Model View</a>
        </h1>
        <br />
        <button style={{ height: "40px", width: "150px", margin: "20px" }}>
          <Link href="./modelView" style={{ textDecoration: "none" }}>
            Goto 3D View Model
          </Link>
        </button>
        <button style={{ height: "40px", width: "150px", margin: "20px" }}>
          <Link href="./ThreeJSARCones" style={{ textDecoration: "none" }}>
            Goto AR View
          </Link>
        </button>
      </main>
    </div>
  );
}
