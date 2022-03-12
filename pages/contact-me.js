import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/contact-me.module.scss";

export default function ContactMe() {
  return (
    <Layout>
      <Head>
        <title>Kusumo1920 - contact me</title>
      </Head>
      <div className={styles.content}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9nyYujkf30ip5uCsEza8tjXdWivrYwgGMMCaqixi2O6gbew/viewform?embedded=true"
          width="640"
          height="540"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <div>
          <p>
            Note: if contact form above didn&apos;t load, please email me to{" "}
            <strong>kesit@kusumo1920.com</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}
