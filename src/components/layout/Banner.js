import React from "react";
import styles from "./Banner.module.scss";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

const Banner = () => {
    return (
        <header className={styles.mediaHeader}>
            <Container>
                <div className={styles.viewportHeader}>
                    <div className={styles.header}>
                        <h1>Where we are, <br />Building Software is Fast, <br />with No Compromise</h1>
                        <div className={styles.actions}>
                            {/* Your banner content goes here */}
                        </div>
                    </div>
                </div>
            </Container>
        </header >
    );
}

export default withRouter(Banner);