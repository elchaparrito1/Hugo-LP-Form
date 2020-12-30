/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import axios from 'axios';
import AddCalendar from './addCalendar';
import Modal from './modal';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
const RsvpForm = () => {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [recordConfirmed, setRecordConfirmed] = useState(false);
  const [state, setState] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: confirmEmail,
    organization: '',
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
          email: confirmEmail,
        });

        if (res.status === 201) {
          setState({
            title: res.data.title,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
            organization: res.data.organization,
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
          status: `Credentials not found. Please try a different email, or contact HUGO-LP Forums directly to register for this forum`,
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

    if (blanks.length > 0) {
      setStatus({
        status: 'Missing information. Please fill in all required fields (*).',
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
          confirmed: false,
        });
        setStatus({
          status: '',
          error: false,
        });
        setIsOpen(true);
      }

      if (res.data === 'error') {
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
          // )
        }
      />
      {!recordConfirmed ? (
        <div className="columns">
          <div className="column is-two-thirds">
            <form onSubmit={handleEmailCheck}>
              <div className="container">
                <div className="column is-half">
                  {status.status && (
                    <div className="content">
                      <p className={status.error ? 'has-text-danger' : ''}>
                        {status.status}
                      </p>
                    </div>
                  )}
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
        <>
          <div className="columns is-multiline">
            <div className="column is-full">
              <p>
                Congradulations! Our records show you are invited to attend this
                forum. The below credentials were found based on the email
                entered.
              </p>
            </div>
            <div className="column is-full">
              <p>
                If this is not your information, please contact HUGO-LP Forums
                directly to correct the issue, or press 'Cancel' to perform a
                new query. Otherwise, please make any desired changes to the
                below information, and click 'Confirm' to officially register
                for this event.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-two-thirds">
              <form onSubmit={handleRSVP}>
                <div className="container">
                  <div className="columns is-multiline">
                    {status.status && (
                      <div className="column is-full">
                        <div className="content">
                          <p className={status.error ? 'has-text-danger' : ''}>
                            {status.status}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="column is-one-third is-centered">
                      <div className="control">
                        <label className="label">Email</label>
                        <p>{confirmEmail}</p>
                      </div>
                    </div>
                    <div className="column is-one-third">
                      <div className="field">
                        <label className="label">First Name *</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="e.g John"
                            name="firstName"
                            value={state.firstName}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-third">
                      <div className="field">
                        <label className="label">Last Name *</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="e.g Doe"
                            name="lastName"
                            value={state.lastName}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-third">
                      <div className="field">
                        <div className="control">
                          <label className="label">Job Title *</label>
                          <div className="field">
                            <div className="control">
                              <div className="control">
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="e.g. CIO"
                                  name="title"
                                  value={state.title}
                                  onChange={onChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="field">
                        <label className="label">Organization *</label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="e.g Hugo-LP"
                            name="organization"
                            value={state.organization}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="column is-one-fifth is-centered">
                      <button type="submit" value="submit" className="button">
                        Confirm
                      </button>
                    </div>
                    <div className="column is-one-fifth is-centered">
                      <button onClick={handleReset} className="button">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RsvpForm;
