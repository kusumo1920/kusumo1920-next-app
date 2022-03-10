import Head from "next/head";
import styles from "./layout.module.scss";
import Header from "./header";

const navItems = [
  { name: "portfolio", path: "/" },
  { name: "about me", path: "/about-me" },
  { name: "my blog", path: "/my-blog" },
  { name: "reviews", path: "/reviews" },
  { name: "contact me", path: "/contact-me" },
];

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is an personal website of Kesit Budi Kusumo"
        />
        <meta name="og:title" content="Kusumo1920.com Website" />
      </Head>
      <div className={styles.frontAppContainer}>
        <Header navItems={navItems} />
        <main className={styles.mainContainer}>{children}</main>
      </div>
    </div>
  );
}
