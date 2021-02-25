/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import FormInfoWrapper from '../formInforWrapper';
import Modal from '../modal';
import AddCalendar from '../addCalendar';
import pdf from '../../documents/Manager-Disclaimer.pdf';

const ManagerRsvpForm = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    type,
    fullName,
    email,
    phone,
    orgName,
    streetAddress,
    city,
    state,
    zipcode,
    confirmed,
  } = location.state;

  const initialVal = {
    type,
    fullName,
    email,
    phone,
    orgName,
    streetAddress,
    city,
    state,
    zipcode,
    confirmed,
    terms: false,
  };

  const [formState, setState] = useState(initialVal);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState({
    status: '',
    error: false,
  });

  const onChange = e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setState({
      ...formState,
      [name]: value,
    });
  };

  const handleRSVP = async e => {
    e.preventDefault();
    const blanks = Object.entries(formState).filter(([k, v]) => v === '');
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

        const resData = formState;
        resData.confirmed = true;

        const res = await axios.post('/api/manager-rsvp', resData);

        if (res.status === 201) {
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
    history.push(`/form/virtual-forum`);
  };

  return (
    <>
      <FormInfoWrapper
        title="Virtual Event RSVP"
        subtitle="April 28 - April 29"
        main="Welcome! Our records show that you are invited to attend this forum. The
        below credentials were found based on the email entered."
        strong="Manager Participation"
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
                      <div className="column is-one-third is-centered">
                        <div className="control">
                          <label className="label">Email</label>
                          <p>{formState.email}</p>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label">Full Name *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g John Doe"
                              name="fullName"
                              value={formState.fullName}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label">Phone/Mobile *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g (XXX) XXX-XXXX"
                              name="phone"
                              value={formState.phone}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <div className="control">
                            <label className="label">
                              Organization/Company *
                            </label>
                            <div className="field">
                              <div className="control">
                                <div className="control">
                                  <input
                                    className="input"
                                    type="text"
                                    placeholder="e.g. Example Enterprises"
                                    name="orgName"
                                    value={formState.orgName}
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
                          <label className="label">Street Address *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g 123 Street Ave"
                              name="streetAddress"
                              value={formState.streetAddress}
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
                                value={formState.terms}
                                checked={formState.terms}
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
                                  {' '}
                                  Terms, Conditions & Disclosures
                                </a>
                              </button>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="column is-two-fifths">
                        <div className="field">
                          <label className="label">City *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g Seattle"
                              name="city"
                              value={formState.city}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-fifth">
                        <div className="field">
                          <label className="label">State *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g WA"
                              name="state"
                              value={formState.state}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-two-fifths">
                        <div className="field">
                          <label className="label">Postal Code *</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="e.g 98101"
                              name="zipcode"
                              value={formState.zipcode}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-fifth is-centered">
                        {formState.terms ? (
                          <button
                            title="register button"
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
                                title="register button"
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

export default ManagerRsvpForm;
