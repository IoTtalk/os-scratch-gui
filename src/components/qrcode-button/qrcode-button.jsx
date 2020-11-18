import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from 'react-modal';
import {FormattedMessage} from 'react-intl';
import QRCode from 'qrcode.react';
import classNames from 'classnames';

import Button from '../button/button.jsx';
import CloseButton from '../close-button/close-button.jsx';
import styles from './qrcode-button.css';
import qrcodeIcon from "./qrcode_scan.png";
import {serverName} from "../../../config";
import eventBus from "../../util/EventBus";

export default class QrcodeBtn extends Component {
    constructor(props) {
        super();
        this.state = {
          showModal: false,
          showQRcode: false,
          smarphone_do_id: undefined,
          p_id: undefined
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        eventBus.on("smartphone_do_id", (data) =>
            this.setState({ smarphone_do_id: data.do_id })
        );
        eventBus.on("p_id", (data) =>
            this.setState({ p_id: data.p_id })
        );
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className={styles.btnstyle}>
                <ReactModal
                    className={styles.modalContent}
                    isOpen={this.state.showModal}
                    overlayClassName={styles.modalOverlay}
                    contentLabel="Qrcode Modal"
                    onRequestClose={this.handleCloseModal}
                    >
                    <div className={styles.header}>
                    <div
                        className={classNames(styles.headerItem,styles.headerItemTitle)}>
                    </div>
                        <div
                            className={classNames(styles.headerItem,styles.headerItemClose)}>
                            <CloseButton
                                size={CloseButton.SIZE_LARGE}
                                onClick={this.handleCloseModal}
                            />
                        </div>
                    </div>

                    {( this.state.p_id == undefined || this.state.smarphone_do_id == undefined ) ? (
                        <div className={classNames(styles.headerItem,styles.headerItemTitle)}>
                            Generating QRcode. Please wait.
                        </div>)
                    : ( <React.Fragment>
                            <div className={classNames(styles.headerItem,styles.headerItemTitle)}>
                                    Scan QRcode
                            </div>
                            <div className={classNames(styles.qrcodeContainer)}>
                            {this.state.smarphone_do_id.map((do_id, i) => {
                                return(
                                    <div className={classNames(styles.qrcodeCard)}>
                                        <div className={classNames(styles.qrcodeItem)}>Player {i+1}</div>
                                        <QRCode value={serverName+"/service/rc/smartphone?do_id="+do_id+"&p_id="+this.state.p_id} className={styles.reactQRcode, styles.qrcodeItem} size={200}/>
                                    </div>
                            )})}
                            </div>
                        </React.Fragment>
                    )}

                </ReactModal>

                <div className={styles.btnstyle} onClick={this.handleOpenModal}>
                    <div>
                        <a className={styles.img}> QRcode</a>
                    </div>
                </div>
            </div>
        );
    }
}
