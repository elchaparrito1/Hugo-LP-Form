/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import FormInfoWrapper from './formInforWrapper';
import { useStatusHook } from './customHooks/useStatusHook';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
const EmailForm = () => {
  const [confirmEmail, setConfirmEmail] = useState('');
  const history = useHistory();
  const [status, dispatch] = useStatusHook();

  const handleEmailCheck = async e => {
    e.preventDefault();

    try {
      if (confirmEmail === '') {
        dispatch({ type: 'NOEMAIL' });
      } else {
        dispatch({ type: 'PROCESSING' });
        const res = await axios.post('/api/confirm-email', {
          email: confirmEmail.toLowerCase(),
        });

        if (res.data.confirmed) {
          dispatch({ type: 'REGISTERED' });
        } else if (res.status === 201) {
          dispatch({ type: 'SUCCESS' });

          if (res.data.type === 'investor') {
            history.push({
              pathname: `/form/virtual-forum/investor-rsvp/${res.data.email}`,
              state: res.data,
            });
          } else {
            history.push({
              pathname: `/form/virtual-forum/manager-rsvp/${res.data.email}`,
              state: res.data,
            });
          }
        }
      }
    } catch (error) {
      if (error.response.data === 'No credentials found') {
        dispatch({ type: 'NOTFOUND' });
      } else {
        dispatch({ type: 'ERROR' });
      }
    }
  };

  return (
    <>
      <FormInfoWrapper
        title="Virtual Event"
        subtitle="April 28 - April 29"
        main="HUGO Forum is an invitation-only event that allows investors to meet multiple managers in small LP groups. Our upcoming forum will be a virtual event. The event provides an efficient platform to meet other investors and managers over two half-day sessions."
        strong="Email Verification"
        child={
          <>
            <div className="columns">
              <div className="column is-two-thirds">
                <div className="column is-full">
                  <p>
                    Please enter your email below to confirm your invitation,
                    and participation in the upcoming forum listed above.
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
          </>
        }
      />
    </>
  );
};

export default EmailForm;
