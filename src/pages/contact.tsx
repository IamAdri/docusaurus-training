import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Heading from "@theme/Heading";

import PageHeader from "../components/PageHeader.tsx";

function Contact() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A small docusaurus project for my assessment"
    >
      <PageHeader title="Contact me">
        <div className={styles.container}>
          <div>
            <Heading as="h3">Adriana Sprincean</Heading>
            <span>email: atoma304@gmail.com</span>
          </div>
          <img src="./img/photo.jpg" height="150px" className={styles.image} />
        </div>
      </PageHeader>
    </Layout>
  );
}

export default Contact;
