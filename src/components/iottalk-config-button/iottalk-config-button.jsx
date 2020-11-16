import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from 'react-modal';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';

import Button from '../button/button.jsx';
import CloseButton from '../close-button/close-button.jsx';
import styles from './iottalk-config-button.css';
import qrcodeIcon from "./qrcode_scan.png";
import smartphoneQrcode from "./smartphone-qrcode.png";

export default class IoTtalkConfigBtn extends Component {
    constructor(props) {
        super();
        this.state = {
          showModal: false,
          showQRcode: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleQrcode = this.handleQrcode.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleQrcode() {
        this.setState({ showQRcode: true });
    }

    render() {
        return (
            <div>
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
                    {this.state.showQRcode ? (
                        <React.Fragment>
                            <div className={classNames(styles.headerItem,styles.headerItemTitle)}>
                                Scan QRcode
                            </div>
                            <img className={styles.qrcodeimg} src={smartphoneQrcode}/>
                        </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <div className={classNames(styles.headerItem,styles.headerItemTitle)}>
                                    QRcode not available
                                </div>
                                <div className={styles.emptyBox}></div>
                            </React.Fragment>
                            )
                    }


                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Smartphone
                            <hr/>
                            <input name="Acceleration" type="checkbox" value="Acceleration"/>
                            <label htmlFor="Acceleration"> Acceleration </label>
                            <input name="Orientation" type="checkbox" value="Orientation"/>
                            <label htmlFor="Orientation"> Orientation </label>
                            <input name="Gyroscope" type="checkbox" value="Gyroscope"/>
                            <label htmlFor="Gyroscope"> Gyroscope </label>
                            <input name="Magnetometer" type="checkbox" value="Magnetometer"/>
                            <label htmlFor="Magnetometer"> Magnetometer </label>
                            <input name="Humidity" type="checkbox" value="Humidity"/>
                            <label htmlFor="Humidity"> Humidity </label>
                            <input name="UV" type="checkbox" value="UV"/>
                            <label htmlFor="UV"> UV </label>
                            <input name="Alcohal" type="checkbox" value="Alcohal"/>
                            <label htmlFor="Alcohal"> Alcohal </label>
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <label>
                            Weather Station
                            <hr/>
                            <input name="AtPressure" type="checkbox" value="AtPressure"/>
                            <label htmlFor="AtPressure"> AtPressure </label>
                            <input name="Humidity1" type="checkbox" value="Humidity1"/>
                            <label htmlFor="Humidity1"> Humidity1 </label>
                            <input name="Humidity2" type="checkbox" value="Humidity2"/>
                            <label htmlFor="Humidity2"> Humidity2 </label>
                            <input name="Temperature1" type="checkbox" value="Temperature1"/>
                            <label htmlFor="Temperature1"> Temperature1 </label>
                            <input name="Temperature2" type="checkbox" value="Temperature2"/>
                            <label htmlFor="Temperature2"> Temperature2 </label>
                            <input name="UV1" type="checkbox" value="UV1"/>
                            <label htmlFor="UV1"> UV </label>
                            <input name="CO2" type="checkbox" value="CO2"/>
                            <label htmlFor="CO2"> CO2 </label>
                            <input name="Luminance" type="checkbox" value="Luminance"/>
                            <label htmlFor="Luminance"> Luminance </label>
                            <input name="Infrared" type="checkbox" value="Infrared"/>
                            <label htmlFor="Infrared"> Infrared </label>
                            <input name="Moisture1" type="checkbox" value="Moisture1"/>
                            <label htmlFor="Moisture1"> Moisture1 </label>
                            <input name="SoilEC" type="checkbox" value="SoilEC"/>
                            <label htmlFor="SoilEC"> SoilEC </label>
                            <input name="SoilTemp" type="checkbox" value="SoilTemp"/>
                            <label htmlFor="SoilTemp"> SoilTemp </label>
                            <input name="PH1" type="checkbox" value="PH1"/>
                            <label htmlFor="PH1"> PH1 </label>
                        </label>
                        <br/>
                        <br/>
                        <input type="button" value="Generate" className={styles.submitBtn} onClick={this.handleQrcode}/>
                        </form>
                </ReactModal>

                <div onClick={this.handleOpenModal}>
                    <a className={styles.img}> IoTtalk Conf.</a>
                </div>
            </div>
        );
    }
}
