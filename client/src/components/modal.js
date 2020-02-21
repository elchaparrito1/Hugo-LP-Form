/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import '../App.scss';

class Modal extends React.Component {
  render() {
    const { isOpen } = this.props;

    if (!isOpen) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card has-background-grey-lighter">
          {this.props.offspring}
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

export default Modal;
