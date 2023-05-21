import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type Section = {
  id?: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  btnText?: string;
  btnLink?: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const Sections: Section[] = [
  {
    title: 'Stichting',
    subTitle: 'Samen Zoeken App',
    imgUrl: 'img/SamenzoekenScreenshotMaps.png',
    btnText: 'Missie',
    btnLink: '/docs/stichting#missie-zoekactie-versnellen',
    description: (
      <>
        Professionele stafkaarten, die instanties ook gebruiken, die normaal niet gratis te verkrijgen is.
      </>
    )
  },
  {
    title: 'Professionele',
    subTitle: 'stafkaarten',
    imgUrl: 'img/SamenzoekenScreenshotMaps.png',
    btnText: 'Kaarten',
    btnLink: '/docs/maps',
    description: (
      <>
        Professionele stafkaarten, die instanties ook gebruiken, die normaal niet gratis te verkrijgen is.
      </>
    )
  },
  {
    title: 'Op één kaart',
    subTitle: 'samen zoeken',
    imgUrl: 'img/SamenzoekenScreenshot.png',
    btnText: 'Hoe werkt het',
    btnLink: '/docs/how',
    description: (
      <>
        Na het openen van de app zie je de gemeenschappelijke kaart, met alle routes die al gelopen zijn.
      </>
    )
  }
];

function Section(props: Section) {
  return (
    <section className={clsx('Section', styles.section)}>
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

function SectionImage({ imgUrl }: Section) {
  return (
    <div className={clsx('col col-md-8')}>
      <div className="text--center">
        <img src={imgUrl} />
      </div>
    </div>
  )
}

function SectionText({ title, subTitle, description, btnLink, btnText }: Section) {
  return (
    <div className={clsx('col col-md-4', styles.middle)}>
      <div className="padding-horiz--md">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        {(btnText && <Link
            className="button button--secondary button--lg"
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
