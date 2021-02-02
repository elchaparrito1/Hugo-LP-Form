/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import imgThree from '../images/follow-up.jpg';
import imgTwo from '../images/roundtable-discussion.jpg';
import imgOne from '../images/one-on-one.jpg';
import pdf from '../documents/meeting-outline.pdf';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
}));

const BlueSwitch = withStyles({
  switchBase: {},
  checked: {
    color: '#2f2fa2',
    '&$checked': {
      color: '#2f2fa2',
    },
    '&$checked + $track': {
      backgroundColor: '#2f2fa2',
    },
  },
  track: {},
})(Switch);

const MainEvent = () => {
  const classes = useStyles();
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column is-full">
              <h1 className="title is-size-3-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
                Featured Meeting Segments
              </h1>
            </div>
          </div>
          <br />
          <div className="columns is-vcentered has-text-centered">
            <div className="column is-one-third">
              <div className="card equal-height">
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgOne} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">LP / GP 1:1 Meetings</h2>
                  <div>
                    <FormControlLabel
                      control={
                        <BlueSwitch
                          checked={checkOne}
                          onChange={() => setCheckOne(prev => !prev)}
                        />
                      }
                    />
                    <div className={classes.container}>
                      <Collapse in={checkOne}>
                        <h2 className="main-event-text">
                          HUGO will introduce LP’s to GP’s. LP’s can select from
                          the GP line-up those they wish to meet with. HUGO will
                          arrange 1:1 virtual meetings during the forum.
                        </h2>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card equal-height">
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgTwo} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">Roundtable Discussions</h2>
                  <div>
                    <FormControlLabel
                      control={
                        <BlueSwitch
                          checked={checkTwo}
                          onChange={() => setCheckTwo(prev => !prev)}
                        />
                      }
                    />
                    <div className={classes.container}>
                      <Collapse in={checkTwo}>
                        <h2 className="main-event-text">
                          The HUGO will include some virtual roundtable
                          discussion groups on areas of current interest.
                        </h2>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card equal-height">
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgThree} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">Post-forum Collaboration</h2>
                  <div>
                    <FormControlLabel
                      control={
                        <BlueSwitch
                          checked={checkThree}
                          onChange={() => setCheckThree(prev => !prev)}
                        />
                      }
                    />
                    <div className={classes.container}>
                      <Collapse in={checkThree}>
                        <h2 className="main-event-text">
                          After the forum LP's can collaborate on: best
                          practices, discuss GP’s met during HUGO, and share
                          ideas for co-diligencing managers, etc. HUGO can
                          identify areas of common interest and connect LP’s who
                          wish to collaborate.
                        </h2>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="pdf-download">
            <a
              className="pdf-download"
              target="_blank"
              rel="noopener noreferrer"
              href={pdf}
            >
              <strong style={{ fontSize: '1.5em' }}>+Forum Outline</strong>
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default MainEvent;
