import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

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
            <div id="mc_embed_signup">
              <form
                action="https://app.us13.list-manage.com/subscribe/post?u=346fc09adb62d5c844ba952a1&amp;id=0f46ccde90&amp;f_id=0028e6e2f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">E-mailadres </label>
                    <input
                      style={{color: 'black'}}
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                    />
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      style={{ display: 'none' }}
                      className="response"
                      id="mce-error-response"
                    ></div>
                    <div
                      style={{ display: 'none' }}
                      className="response"
                      id="mce-success-response"
                    ></div>
                  </div>
                  <div
                    className={styles.outOfScreen}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_346fc09adb62d5c844ba952a1_0f46ccde90"
                      tabIndex='-1'
                      value=""
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <br></br>
                      <input
                        type="submit"
                        value="Hou me op de hoogte"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button button--secondary"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
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
      </main>
    </Layout>
  );
}
