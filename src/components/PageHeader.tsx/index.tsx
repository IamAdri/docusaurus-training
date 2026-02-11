import styles from "./style.module.css";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { PropsWithChildren } from "react";

type PageHeaderProps = PropsWithChildren<{
  title: string;
}>;

function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {title}
        </Heading>
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
