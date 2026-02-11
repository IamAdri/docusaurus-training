import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easier to explore code blocks",
    Svg: require("@site/static/img/undraw_process.svg").default,
    description: (
      <>
        By having line numbering by default facilitates reading through longer
        code examples.
      </>
    ),
  },
  {
    title: "Less boilerplate code",
    Svg: require("@site/static/img/undraw_programming.svg").default,
    description: (
      <>
        It enables writting code blocks without adding showLineNumbers key to
        each code block.
      </>
    ),
  },
  {
    title: "New sugestions",
    Svg: require("@site/static/img/undraw_sugestions.svg").default,
    description: (
      <>
        In case you have an amazing idea to make exploring the documentation
        easier do not hesitate to make a pull request on{" "}
        <Link to="https://github.com/IamAdri/docusaurus-assessment/tree/main/my-website">
          my github repository
        </Link>
        .
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresList}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
