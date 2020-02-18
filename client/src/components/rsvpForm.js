import React, { useState } from 'react';
import axios from 'axios';
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
  });
  const [blank, setBlank] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleRSVP = async e => {
    e.preventDefault();
    const { rsvp, firstName, lastName, email } = state;
    const input = [rsvp, firstName, lastName, email];

    for (const val of input) {
      if (val === '') {
        setBlank(true);
        return false;
      }
    }
    setBlank(false);
    const res = await axios.post('/api/rsvp', state);

    if (res.status === 201) {
      setState({
        rsvp: 'yes',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
      });
      setSuccess(true);
    }
  };

  const handleModal = () => (success ? setSuccess(false) : setSuccess(true));

  //   console.log(state);

  return (
    <>
      <Modal
        success={success}
        handleModal={handleModal}
        header={<>RSVP Confirmed</>}
        body={
          <>
            <p>We look forward to seeing you.</p>
            <br />
            <p>A confirmation message was just sent to the registered email.
            Please visit Hugo-LP Forum's main page for more information.</p>
          </>
        }
        footer="Close"
      />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <div className="notification has-background-grey-lighter">
              <form onSubmit={e => handleRSVP(e)}>
                <div className="container">
                  <div className="columns is-multiline">
                    <div className="column is-full">
                      <h1 className="title">
                        Please fill out the form to RSVP.
                      </h1>
                    </div>
                    {blank && (
                      <div className="column is-full">
                        <div className="content">
                          <p className="has-text-danger">
                            Missing information. Please fill in all required
                            fields (*).
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
        </div>
      </div>
    </>
  );
};

export default RsvpForm;
