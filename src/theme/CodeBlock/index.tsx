import React, { type ReactNode } from "react";
import CodeBlock from "@theme-original/CodeBlock";
import type CodeBlockType from "@theme/CodeBlock";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  //Get metastring from props and convert into array
  const metastringArr = props?.metastring && props.metastring.split(" ");
  //Detect if there is a hideLineNumbers metastring
  const hideLineNumbers = metastringArr?.includes("hideLineNumbers");
  //Detect if there is a customed start number
  const customedShowLineNumbers = metastringArr?.filter((metaData) =>
    metaData.startsWith("showLineNumbers="),
  );

  return hideLineNumbers || customedShowLineNumbers?.length > 0 ? (
    <CodeBlock {...props} />
  ) : (
    <CodeBlock {...props} showLineNumbers />
  );
}
