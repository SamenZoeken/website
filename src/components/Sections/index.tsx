import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type Section = {
  id?: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  imgAlt: string;
  imgClass?: string;
  btnText?: string;
  btnLink?: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const Sections: Section[] = [
  {
    title: 'Oorsprong',
    subTitle: 'Samen Zoeken App',
    imgUrl: 'img/emilietta_250px.jpg',
    imgAlt: 'Vermissing Emilietta Chini',
    btnText: 'Lees ons verhaal',
    btnLink: '/blog/samenzoeken-app-idee',
    description: (
      <>
        <p>
          Na de verdwijning van
          <a
            href="https://www.vrt.be/vrtnws/nl/2023/02/28/lichaam-gevonden/"
            target="_blank"
          > Emilietta Chini </a> in 2023
          lijdend aan dementie, ging haar familie massaal naar haar op zoek,
          geholpen door honderden vrijwilligers.
        </p>
        <p >
          Al snel werd duidelijk dat het erg moeilijk is om met zo een grote
          groep gecoördineerd te zoeken. Wie is waar al gaan kijken? Hoe
          grondig is er al gezocht, en in welk gebied?</p>
        <p>
          "Ik heb lang gezocht, maar zo een app bestond niet.
          Dus ben ik 'm zelf gaan ontwikkelen," zegt neef Ben Chini.</p>      </>
    )
  },
  {
    title: 'Professionele',
    subTitle: 'stafkaarten',
    imgUrl: 'img/SamenzoekenScreenshotMaps.png',
    imgAlt: 'Screenshot Samen Zoeken App professionele stafkaarten',
    btnText: 'Ontdek de Kaarten',
    btnLink: '/docs/maps',
    description: (
      <>
        Professionele officiële stafkaarten, deze kaarten zijn als bron erkend door de overheid en worden meerdere malen per jaar geactualiseerd.
      </>
    )
  },
  {
    title: 'Op één kaart',
    subTitle: 'samen zoeken',
    imgUrl: 'img/SamenzoekenScreenshot.webp',
    imgAlt: 'Screenshot Samenzoeken op één kaart samen zoeken',
    btnText: 'Hoe werkt het',
    btnLink: '/docs/how',
    description: (
      <>
        <p>Je ziet de gelopen route van iedereen met de Samen Zoeken App, waardoor er zichtbaar is waar er al gezocht is.</p>
        <p>Dit minimaliseert overlap van zoekgebieden en verhoogt de effectiviteit van zoekacties.</p>
      </>
    )
  }, {
    title: 'Stichting',
    subTitle: 'Samen Zoeken App',
    imgUrl: 'img/favicon-samenzoeken.png',
    imgAlt: 'Stichting Samen Zoeken App Logo',
    imgClass: 'imgStichtingLogo',
    btnText: 'Onze Missie',
    btnLink: '/docs/stichting',
    description: (
      <>
        <p>Zoveel mogelijk mensen die willen helpen moeten ook kunnen helpen zoeken, zonder drempel of betalingen. </p>

        <p>Daarom is de Stichting Samen Zoeken App geboren die de app gratis aanbiedt, zonder winstoogmerk.</p>
      </>
    )
  }
];

function Section(props: Section) {
  return (
    <section className={clsx('Section', styles.section, (props.id % 2 != 0) && styles.sectionEven)}>
      <div className={clsx('container')}>
        <div className={clsx('row')}>
          {(props.id % 2 == 0) ?
            <>
              <SectionImage {...props} />
              <SectionText {...props} />
            </>
            :
            <>
              <SectionText {...props} />
              <SectionImage {...props} />
            </>
          }
        </div>
      </div>
    </section>
  );
}

function SectionImage({ imgUrl, imgClass }: Section) {
  return (
    <div className={clsx('col col-md-8', styles.middle)}>
      <div className="text--center">
        <img src={imgUrl} className={clsx(styles.sectionImage, imgClass && styles[imgClass])} />
      </div>
    </div>
  )
}

function SectionText({ title, subTitle, description, btnLink, btnText }: Section) {
  return (
    <div className={clsx('col col-md-4', styles.middle)}>
      <div className="padding-horiz--md">
        <h1 className={styles.sectionH1}>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        {(btnText && <Link
          className="button button--primary button--lg"
          to={btnLink}>
          {btnText}
        </Link>
        )}
      </div>
    </div>
  )
}

export default function HomePageSections(): JSX.Element {
  return (
    <div className={clsx('Sections')}>
      {Sections.map((props, idx) => (
        props.id = idx,
        <Section key={idx} {...props} />
      ))}
    </div>
  );
}
