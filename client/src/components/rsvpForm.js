import React, { useState } from 'react';
import axios from 'axios';
import AddCalendar from './addCalendar';
import Modal from './modal';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
const RsvpForm = () => {
  const [state, setState] = useState({
    rsvp: 'yes',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interested: 'yes',
  });
  const [blank, setBlank] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [no, setNo] = useState(false);
  const [interested, setInt] = useState(false);
  const [error, setError] = useState(false);

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleRSVP = async e => {
    e.preventDefault();
    const { rsvp } = state;

    if (rsvp === 'no') {
      setNo(true);
      setIsOpen(true);
      setBlank(false);
      setError(false);
    } else {
      setBlank(false);
      try {
        const res = await axios.post('/api/rsvp', state);

        if (res.status === 201) {
          setState({
            rsvp: 'yes',
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            interested: '',
          });
          setIsOpen(true);
        }
      } catch (err) {
        if (err.response.data === 'missing data') {
          setBlank(true);
        }

        if (err.response.data === 'error') {
          setBlank(false);
          setError(true);
        }
      }
    }
  };

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setNo(false);
      setState({
        rsvp: 'yes',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interested: '',
      });
      setError(false);
      setInt(false);
    } else if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const handleInterest = async () => {
    if (state.interested === 'no') {
      handleModal();
    } else if (state.interested === 'yes') {
      const res = await axios.post('/api/interested', state);

      if (res.status === 201) {
        setInt(true);
        setTimeout(() => {
          handleModal();
        }, 5000);
      }

      if (res.status === 400) {
        setError(true);
      }
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        offspring={
          no ? (
            <>
              <header className="modal-card-head has-background-grey-lighter">
                <p className="modal-card-title">No RSVP Confirmed</p>
                <button
                  type="button"
                  className="delete"
                  aria-label="close"
                  onClick={handleModal}
                ></button>
              </header>
              <section className="modal-card-body has-background-grey-lighter">
                <p>Thank you for the response.</p>
                <br />
                <p>
                  Are you interested in attending future Hugo-LP Forums events?
                </p>
                <br />
                <div className="control">
                  <label className="radio">
                    <input
                      className="form-radio"
                      type="radio"
                      name="interested"
                      value="yes"
                      checked={state.interested === 'yes'}
                      onChange={onChange}
                    />
                    Yes
                  </label>
                  <label className="radio">
                    <input
                      className="form-radio"
                      type="radio"
                      name="interested"
                      value="no"
                      checked={state.interested === 'no'}
                      onChange={onChange}
                    />
                    No
                  </label>
                </div>
                <br />
                {interested && (
                  <p className="has-text-success">
                    Thank you for your interest. We will contact you about
                    future Hugo-LP forums.
                  </p>
                )}
              </section>
              <footer className="modal-card-foot has-background-grey-lighter">
                <button
                  type="button"
                  className="button"
                  onClick={handleInterest}
                >
                  Submit
                </button>
              </footer>
            </>
          ) : (
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
                  Please visit Hugo-LP Forum's{' '}
                  <a href="https://hugo-lp-forum.now.sh/">main page</a> for more
                  information.
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
          )
        }
      />

      <div className="columns">
        <div className="column is-two-thirds">
          <form onSubmit={e => handleRSVP(e)}>
            <div className="container">
              <div className="columns is-multiline">
                {blank && (
                  <div className="column is-full">
                    <div className="content">
                      <p className="has-text-danger">
                        Missing information. Please fill in all required fields
                        (*).
                      </p>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="column is-full">
                    <div className="content">
                      <p className="has-text-danger">
                        Apologies. Something went wrong. Please refresh the
                        page.
                      </p>
                    </div>
                  </div>
                )}
                <div className="column is-one-fifth is-centered">
                  <div className="control">
                    <label className="label">RSVP *</label>
                    <div className="field">
                      <div className="control">
                        <div className="select">
                          <select
                            name="rsvp"
                            value={state.rsvp}
                            onChange={onChange}
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-two-fifths">
                  <div className="field">
                    <label className="label">First Name *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Alex"
                        name="firstName"
                        value={state.firstName}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-two-fifths">
                  <div className="field">
                    <label className="label">Last Name *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Smith"
                        name="lastName"
                        value={state.lastName}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Email *</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        name="email"
                        value={state.email}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Company</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Hugo-LP"
                        name="company"
                        value={state.company}
                        onChange={onChange}
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RsvpForm;
