import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from 'react-modal';

import styles from './iottalk-connection-button.css';
import qrcodeIcon from "./qrcode_scan.png";
import {iottalkURL} from '../../../config';

export default class IoTtalkConnectionBtn extends Component {
    constructor(props) {
        super(props);
    }

    showIottalkConn() {
        window.open(iottalkURL+"/connection");
    }

    render() {
        return (
            <div className={styles.btnstyle} onClick={this.showIottalkConn}>
                <div className={styles.content}>
                    <a className={styles.img}> IoTtalk</a>
                </div>
            </div>
        );
    }
}
