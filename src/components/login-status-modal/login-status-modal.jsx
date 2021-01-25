import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from 'react-modal';
import classNames from 'classnames';

import CloseButton from '../close-button/close-button.jsx';
import styles from './login-status-modal.css';
import eventBus from "../../util/EventBus";

export default class LoginStatusModal extends Component {
    constructor(props) {
        super();
        this.state = {
          showModal: false,
          login_status: undefined,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        eventBus.on("login_status", (data) =>
            this.setState({
                showModal: true,
                login_status: data.status })
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

                <div className={classNames(styles.headerItem,styles.headerItemTitle)}>
                    {this.state.login_status}
                </div>

            </ReactModal>
        );
    }
}
