/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import FormInfoWrapper from '../formInforWrapper';
import assetOptions from './options';
import Modal from '../modal';
import AddCalendar from '../addCalendar';
import pdf from '../../documents/Investor-Disclaimer.pdf';
import { useStatusHook } from '../customHooks/useStatusHook';

const InvestorRsvpForm = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    type,
    title,
    firstName,
    lastName,
    email,
    organization,
    numberOfTeam,
    confirmed,
    assetClasses,
  } = location.state;

  const initialVal = {
    type,
    title,
    firstName,
    lastName,
    email,
    organization,
    numberOfTeam,
    assetClasses,
    confirmed,
    terms: false,
  };

  const [state, setState] = useState(initialVal);
  const [isOpen, setIsOpen] = useState(false);
  const [status, dispatch] = useStatusHook();

  console.log(status);

  const onChange = e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAssets = e => {
    setState({
      ...state,
      assetClasses: e,
    });
  };

  const handleRSVP = async e => {
    e.preventDefault();
    const blanks = Object.entries(state).filter(([k, v]) => v === '');
    try {
      if (blanks.length > 0) {
        dispatch({ type: 'MISSING' });
      } else {
        dispatch({ type: 'PROCESSING' });

        const resData = state;
        resData.confirmed = true;

        const res = await axios.post('/api/investor-rsvp', resData);

        if (res.status === 201) {
          dispatch({ type: 'SUCCESS' });
          setIsOpen(true);
        }
      }
    } catch (error) {
      if (error.response.data === 'error') {
        dispatch({ type: 'ERROR' });
      }
    }
  };

  const handleReset = () => {
    history.push(`/form/virtual-forum`);
  };

  return (
    <>
      <FormInfoWrapper
        title="Virtual Event RSVP"
        subtitle="April 28 - April 29"
        main="Welcome! Our records show that you are invited to attend this forum. The
        below credentials were found based on the email entered."
        strong="Investor Participation"
        child={
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
                      onClick={handleReset}
                    ></button>
                  </header>
                  <section className="modal-card-body has-background-grey-lighter">
                    <p>We look forward to seeing you.</p>
                    <br />
                    <p>
                      A confirmation message was just sent to the registered
                      email. Please visit{' '}
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
                    <button
                      type="button"
                      className="button"
                      onClick={handleReset}
                    >
                      Close
                    </button>
                  </footer>
                </>
              }
            />
            <div className="columns is-multiline">
              <div className="column is-full">
                <p></p>
              </div>
              <div className="column is-full">
                <p>
                  If this is not your information, please{' '}
                  {
                    <a
                      style={{ textDecoration: 'none', color: '#2f2fa2' }}
                      href="mailto:mark@hugo-lpf.com"
                    >
                      email{' '}
                    </a>
                  }{' '}
                  HUGO-LP Forums directly to correct the issue, or press
                  'Cancel' to perform a new query. Otherwise, please make any
                  desired changes to the below information, and click 'Confirm'
                  to officially register for this event.
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
                            <p
                              className={status.error ? 'has-text-danger' : ''}
                            >
                              {status.status}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="column is-full is-centered">
                        <div className="control">
                          <label className="label">Email</label>
                          <p>{state.email}</p>
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
                          <label className="label" htmlFor="organization">
                            Organization *
                          </label>
                          <div className="control">
                            <input
                              id="organization"
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
                      <div className="column is-full">
                        <div className="field">
                          <div className="control">
                            <label className="checkbox" htmlFor="terms">
                              <input
                                id="terms"
                                className="checkbox"
                                type="checkbox"
                                name="terms"
                                value={state.terms}
                                checked={state.terms}
                                onChange={onChange}
                              />{' '}
                              I have read and agreed to the
                              <button type="button" className="pdf-download">
                                <a
                                  className="btn-a-tag"
                                  style={{
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={pdf}
                                >
                                  Terms, Conditions & Disclosures
                                </a>
                              </button>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="column is-full">
                        <p className="subtitle is-6">
                          <strong>Questionnaire:</strong>
                        </p>
                      </div>
                      <div className="column is-half">
                        <div className="field">
                          <label className="label">
                            Number of investment professionals on your team *
                          </label>
                          <div className="control">
                            <input
                              className="input"
                              type="number"
                              placeholder="0"
                              name="numberOfTeam"
                              value={state.numberOfTeam || ''}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-half">
                        <div className="field">
                          <label className="label">
                            Asset classes covered in current assignment *
                          </label>
                          <div className="control">
                            <ReactMultiSelectCheckboxes
                              options={assetOptions}
                              value={state.assetClasses}
                              onChange={handleAssets}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-fifth is-centered">
                        {state.terms ? (
                          <button
                            title="This is only a test"
                            type="submit"
                            value="submit"
                            className="button"
                          >
                            Confirm
                          </button>
                        ) : (
                          <div>
                            <ReactTooltip
                              place="bottom"
                              type="warning"
                              effect="solid"
                              backgroundColor="black"
                            />
                            <p data-tip="Please review Terms, Conditions & Disclosures">
                              <button
                                title="This is only a test"
                                type="submit"
                                value="submit"
                                className="button is-static"
                              >
                                Confirm
                              </button>
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="column is-one-fifth is-centered">
                        <button
                          type="submit"
                          onClick={handleReset}
                          className="button"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default InvestorRsvpForm;
