import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './HeroSection.css'; // Importeer de CSS-stijlsheet

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className="hero heroBanner">
      <div className="container">
        <div className='row'>
          <div className="col col-md-8 hero-left">
            <h1>{siteConfig.title}</h1>
            {/*<p>{siteConfig.tagline}</p>
            <p className="pageDescription">
              Na de verdwijning van
              <a
                href="https://www.vrt.be/vrtnws/nl/2023/02/28/lichaam-gevonden/"
                target="_blank"
              > Emilietta Chini </a>
              lijdend aan dementie, ging haar familie massaal naar haar op zoek,
              geholpen door honderden vrijwilligers.
            </p>
            <p className="pageDescription">
              Al snel werd duidelijk dat het erg moeilijk is om met zo een grote
              groep gecoördineerd te zoeken. Wie is waar al gaan kijken? Hoe
              grondig is er al gezocht, en in welk gebied?
            </p>*/}
            <p className="pageDescription">
              De Samen Zoeken App maakt professionele tools toegankelijk voor vrijwilligers die meehelpen bij een vermissing om zoekakties te versnellen.
              <ul>
                <li>&nbsp; Gratis</li>
                <li>&nbsp; Intuïtief</li>
                <li>&nbsp; Anoniem</li>
              </ul>
            </p>

            <div>

              <div className="buttons">
                <a href="https://apps.apple.com/us/app/samenzoeken/id6449149051?itsct=apps_box_badge&amp;itscg=30200" className="button-ios" target="_blank"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/nl-nl?size=250x83&amp;releaseDate=1684454400" alt="Download on the App Store" /></a>
                <a href="https://play.google.com/store/apps/details?id=app.samenzoeken" className="button-ios" target="_blank"><img src="img/google-play-badge.png" alt="Download on the Google Play Store" /></a>
              </div>
            </div>
          </div>
          <div className="hero-right col col-md-4">
            <img src="img/SamenzoekenScreenshot.webp" className="HeroImage" alt="Samen Zoeken Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;