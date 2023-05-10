import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../assets/css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>hello</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
