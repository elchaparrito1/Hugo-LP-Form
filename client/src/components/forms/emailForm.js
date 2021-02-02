/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import AddCalendar from '../addCalendar';
import Modal from '../modal';
import RsvpForm from './rsvpForm';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
const EmailForm = () => {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [recordConfirmed, setRecordConfirmed] = useState(false);
  const [state, setState] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: confirmEmail,
    organization: '',
    numberOfTeam: '',
    assetClasses: [],
    confirmed: false,
  });
  const [status, setStatus] = useState({
    status: '',
    error: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        numberOfTeam: '',
        assetClasses: [],
        confirmed: false,
      });
      setStatus({
        status: '',
        error: false,
      });
      setRecordConfirmed(false);
      setConfirmEmail('');
    } else if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAssets = e => {
    setState({
      ...state,
      assetClasses: e,
    });
  };

  const handleEmailCheck = async e => {
    e.preventDefault();

    try {
      if (confirmEmail === '') {
        setStatus({
          status: 'Please enter email to confirm invitation.',
          error: true,
        });
      } else {
        setStatus({
          status: 'Verifying email address...',
          error: false,
        });
        const res = await axios.post('/api/confirm-email', {
          email: confirmEmail.toLowerCase(),
        });

        if (res.data.confirmed) {
          setStatus({
            status: `It appears this email has already been registered for this forum. If this is a mistake, or you would like to register with a different email, please <a class="link-1 no-btn" href="mailto:mark@hugo-lpf.com">
            contact </a> forum organizer Mark Waite.`,
            error: true,
          });
        } else if (res.status === 201) {
          setState({
            title: res.data.title,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            organization: res.data.organization,
            numberOfTeam: res.data.numberOfTeam,
            assetClasses: res.data.assetClasses,
            confirmed: true,
          });
          setRecordConfirmed(true);
          setStatus({
            status: '',
            error: false,
          });
        }
      }
    } catch (error) {
      if (error.response.data === 'No credentials found') {
        setStatus({
          status: `Credentials not found. If you want to participate in the above forum, <a class="link-1 no-btn" href="mailto:mark@hugo-lpf.com">
          email </a> forum organizer Mark Waite.`,
          error: true,
        });
      } else {
        setStatus({
          status:
            'Oops... Something went wrong. Please refesh the page and try again.',
          error: true,
        });
      }
    }
  };

  const handleRSVP = async e => {
    e.preventDefault();
    const blanks = Object.entries(state).filter(([k, v]) => v === '');
    try {
      if (blanks.length > 0) {
        setStatus({
          status:
            'Missing information. Please fill in all required fields (*).',
          error: true,
        });
      } else {
        setStatus({
          status: 'Processing...',
          error: false,
        });

        const res = await axios.post('/api/rsvp', state);

        if (res.status === 201) {
          setState({
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            organization: '',
            numberOfTeam: '',
            assetClasses: [],
            confirmed: false,
          });
          setStatus({
            status: '',
            error: false,
          });
          setIsOpen(true);
        }
      }
    } catch (error) {
      if (error.response.data === 'error') {
        setStatus({
          status: 'Error occurred. Please refresh page and try again.',
          error: true,
        });
      }
    }
  };

  const handleReset = () => {
    setState({
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      numberOfTeam: '',
      assetClasses: [],
    });
    setRecordConfirmed(false);
    setConfirmEmail('');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        offspring={
          <>
            <header className="modal-card-head has-background-grey-lighter">
              <p className="modal-card-title">RSVP Confirmed</p>
              <button
                type="button"
                className="delete"
                aria-label="close"
                onClick={handleModal}
              ></button>
            </header>
            <section className="modal-card-body has-background-grey-lighter">
              <p>We look forward to seeing you.</p>
              <br />
              <p>
                A confirmation message was just sent to the registered email.
                Please visit{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="http://www.hugo-lpf.com/"
                >
                  {' '}
                  Hugo-LP Forum{' '}
                </a>{' '}
                for more information.
              </p>
              <br />
              <AddCalendar />
            </section>
            <footer className="modal-card-foot has-background-grey-lighter">
              <button type="button" className="button" onClick={handleModal}>
                Close
              </button>
            </footer>
          </>
        }
      />
      {!recordConfirmed ? (
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="column is-full">
              <p>
                Please enter your email below to confirm your invitation, and
                participation in the upcoming forum listed above.
              </p>
            </div>
            <form onSubmit={handleEmailCheck}>
              <div className="container">
                <div className="column is-full">
                  {status.status && (
                    <div className="content">
                      <p className={status.error ? 'has-text-danger' : ''}>
                        {ReactHtmlParser(status.status)}
                      </p>
                    </div>
                  )}
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Email *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="e.g. johndoe@gmail.com"
                        name="email"
                        value={confirmEmail}
                        onChange={e => setConfirmEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <button type="submit" value="Submit" className="button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <RsvpForm
          handleRSVP={handleRSVP}
          status={status}
          state={state}
          onChange={onChange}
          handleAssets={handleAssets}
          handleReset={handleReset}
        />
      )}
    </>
  );
};

export default EmailForm;
