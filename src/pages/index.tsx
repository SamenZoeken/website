import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Newsletter from '../components/Newsletter';
import HeroSection from '../components/HeroSection';
import HomePageSections from '../components/Sections';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hulpmiddel voor burgerparticipatie tijdens een zoekaktie">
      <HeroSection />
      <main>
        {<HomePageSections />}
        {<Newsletter />}
      </main>
    </Layout>
  );
}
