/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import PropTypes from 'prop-types';
import assetOptions from './options';

const RsvpForm = props => {
  const {
    handleRSVP,
    status,
    state,
    onChange,
    handleAssets,
    handleReset,
  } = props;

  return (
    <>
      <div className="columns is-multiline">
        <div className="column is-full">
          <p>
            Our records show you are invited to attend this forum. The below
            credentials were found based on the email entered.
          </p>
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
            HUGO-LP Forums directly to correct the issue, or press 'Cancel' to
            perform a new query. Otherwise, please make any desired changes to
            the below information, and click 'Confirm' to officially register
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
                  <button type="submit" value="submit" className="button">
                    Confirm
                  </button>
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
  );
};

RsvpForm.propTypes = {
  handleRSVP: PropTypes.func,
  status: PropTypes.object,
  state: PropTypes.object,
  onChange: PropTypes.func,
  handleAssets: PropTypes.func,
  handleReset: PropTypes.func,
};

export default RsvpForm;
