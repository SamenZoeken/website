import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Newsletter(): JSX.Element {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--8')}>
            <div className="text--left newsletter">
              <h3>Schrijf je in voor onze nieuwsbrief</h3>
              <p>Blijf op de hoogte van het laatste nieuws over de Stichting Samen Zoeken App</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
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
                      {/*<label htmlFor="mce-EMAIL">E-mailadres </label>*/}
                      <input
                        style={{ color: 'black' }}
                        type="email"
                        name="EMAIL"
                        placeholder="Email"
                        className="required email"
                        id="mce-EMAIL"
                        required
                      />
                      <input
                        style={{ width: 'auto' }}
                        type="submit"
                        value="Inschrijven"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button button--secondary"
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

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}