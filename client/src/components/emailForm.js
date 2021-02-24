/* eslint-disable react/button-has-type */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import FormInfoWrapper from './formInforWrapper';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
const EmailForm = () => {
  const [confirmEmail, setConfirmEmail] = useState('');
  const history = useHistory();
  const [status, setStatus] = useState({
    status: '',
    error: false,
  });

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
          setStatus({
            status: '',
            error: false,
          });

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
