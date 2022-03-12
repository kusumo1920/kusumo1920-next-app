import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/index.module.scss";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Kusumo1920 - portfolio</title>
      </Head>
      <div className={styles.contentContainer}>
        <div className={styles.leftSection}>
          <div className={styles.additionalLinksSection}>
            <a
              className={styles.link}
              href="https://drive.google.com/file/d/12n93_Mn_iDI7Uh15lbemDrRy5RN6IM7I/view?usp=sharing"
            >
              download cv
            </a>
          </div>
          <div className={styles.profilePicContainer}>
            <Image
              priority
              src="/images/kusumo1920-portfolio-main.png"
              alt="Kesit Budi Kusumo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <h1>
            Why hire me?{" "}
            <small className={styles.subtitle}>(as a software engineer)</small>
          </h1>
          <h4>- Experience working in enterprise project</h4>
          <p>
            During my career, I and my team have developed various type of
            project from many distinct clients. One of those clients we served
            are Pertamina, in which we developed web apps to manage its human
            resource and Supply Chain Management data.
          </p>
          <h4>- Used to work in agile environment</h4>
          <p>
            Most of projects that I've been developed were using technique
            called SCRUM. This allows fast software development and delivery to
            client.
          </p>
          <h1>Latest work</h1>
          <ul>
            <li>Pertamina: People Palm, SCM, and Well Pro web apps.</li>
            <li>Company email setup using 3rd party services.</li>
            <li>Backlink SEO.</li>
            <li>Domain & hosting setup.</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Image
          priority
          src="/images/programmer-gray-text.png"
          alt="Kesit Budi Kusumo"
          height={204}
          width={2553}
        />
      </div>
    </Layout>
  );
}
