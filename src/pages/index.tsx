import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Newsletter from '../components/Newsletter';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.pageDescription}>
            Na de verdwijning van
            <a
              href="https://www.vrt.be/vrtnws/nl/2023/02/28/lichaam-gevonden/"
              target="_blank"
              > Emilietta Chini </a>
            lijdend aan dementie, ging haar familie massaal naar haar op zoek,
            geholpen door honderden vrijwilligers.
          </p>
          <p className={styles.pageDescription}>
            Al snel werd duidelijk dat het erg moeilijk is om met zo een grote
            groep gecoördineerd te zoeken. Wie is waar al gaan kijken? Hoe
            grondig is er al gezocht, en in welk gebied?
          </p>
          <p className={styles.pageDescription}>
            Met de 'Samen zoeken' app, kunnen groepen mensen elkaars stappen
            precies nagaan. De app is in ontwikkeling en is binnenkort
            beschikbaar.
          </p>
          <div>
           
          </div>

       {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hulpmiddel voor burgerparticipatie tijdens een zoekaktie">
      <HomepageHeader />
      <main>
        {<HomepageFeatures />}
        {<Newsletter />}
      </main>
    </Layout>
  );
}
