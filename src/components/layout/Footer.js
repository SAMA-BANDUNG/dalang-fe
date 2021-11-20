import React from 'react';
import styles from './Footer.module.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
const Footer = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.body}>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column computer={6} mobile={16}>
                            <div className={styles.logo}>
                                <h1><b>Pellerex</b></h1>
                                <div>
                                    <a href="mailto:info@pellerex.com" target={"_blank"} rel="noopener noreferrer">
                                        <img src={'https://cdn.pellerex.com/public/ecosystem/web/home/pellerex-email.svg'} alt="Email link to send a message to Technology Leads." />
                                    </a>

                                    <a href="https://twitter.com/pellerex" target={"_blank"} rel="noopener noreferrer">
                                        <img src={'https://cdn.pellerex.com/public/ecosystem/web/home/pellerex-twitter.svg'} alt="Technology Leads twitter account to contact us." />
                                    </a>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div className={styles.links}>
                                <div className={styles.title}>LINKS</div>
                                <div className={styles.policies}>Use of our platform is subject to <br />our <Link to="/terms">terms</Link> and <Link to="/policies">policies.</Link></div>
                                <a href="/contact-us">Contact Us</a>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div className={styles.notices}>
                                <p className={styles.title}>NOTICES</p>

                                <div className={styles.copyRight}>
                                    Copyright © <a href="https://technologyleads.io" target="_blank" rel="noopener noreferrer">Technology Leads</a> {moment().format('YYYY')}.
                                    <br /> All rights reserved.
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;