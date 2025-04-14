import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <iframe
          style={{
            width:"100vw",
            maxWidth:640,
            height:480,
          }}
          src="https://drive.google.com/embeddedfolderview?id=1uc4Y4HKf4RmRBiaxT5O6zkZdkfcAzgtA"
          ></iframe>
      </main>
    </Layout>
  );
}
