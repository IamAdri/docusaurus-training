import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import PageHeader from "../components/PageHeader.tsx";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A small docusaurus project for my assessment"
    >
      <PageHeader title={siteConfig.title}>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/my_assessment"
          >
            See the documentation 😊
          </Link>
        </div>
      </PageHeader>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
