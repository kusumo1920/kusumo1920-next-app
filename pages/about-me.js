import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/about-me.module.scss";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>Kusumo1920 - about me</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.introduction}>
          <h1>Hello there, you can call me:</h1>
          <Image
            priority
            src="/images/kusumo-batik-text.png"
            alt="Kesit Budi Kusumo"
            height={100}
            width={500}
          />
          <div className={styles.subIntroduction}>
            <h3>working remotely during daytime</h3>
            <h3>& do freelance at free time</h3>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            My full name is <strong>Kesit Budi Kusumo</strong>. At the moment, I
            work as an Indonesian software engineer remotely in an awesome
            company - <em>Solecode</em>. There I and teams build many beautiful,
            useful, and great products (so called apps 😉). Mostly, those apps
            are content & data oriented: managing (create, update, delete),
            displaying, and plotting data.
          </p>
          <p>
            In my free time, besides doing freelance and spend with family, I
            also always try to re-update and getting new IT knowledge. Whether
            its new concepts or open source tools, they always make me excited
            (It&apos;s awesome right, we&apos;re lucky to live in the era of
            growing open source).
          </p>
          <p>
            I think that&apos;s all I can share about me, interested in other
            that maybe I miss something? Then please contact me via the top
            navigation link above.
          </p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}
