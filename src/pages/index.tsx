import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

//import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <div>
          <iframe
            style={{
              width:"-webkit-fill-available",
              maxWidth:"640",
              height:"100%",
            }}
            src="https://drive.google.com/embeddedfolderview?id=1uc4Y4HKf4RmRBiaxT5O6zkZdkfcAzgtA"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
