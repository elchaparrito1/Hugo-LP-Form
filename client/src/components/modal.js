/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';

class Modal extends React.Component {
  render() {
    const { success } = this.props;

    if (!success) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card has-background-grey-lighter">
          <header className="modal-card-head has-background-grey-lighter">
            <p className="modal-card-title">{this.props.header}</p>
            <button
              type="button"
              className="delete"
              aria-label="close"
              onClick={this.props.handleModal}
            ></button>
          </header>
          <section className="modal-card-body has-background-grey-lighter">
            {this.props.body}
          </section>
          <footer className="modal-card-foot has-background-grey-lighter">
            <button
              type="button"
              className="button"
              onClick={this.props.handleModal}
            >
              {this.props.footer}
            </button>
          </footer>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

export default Modal;
