import React from 'react';
import PropTypes from 'prop-types';

const FormInfoContainer = props => {
  const { title, subtitle, main, strong, child } = props;

  return (
    <>
      <div className="columns">
        <div className="column is-centered">
          <div className="container">
            <div className="notification">
              <section className="section">
                <div className="container">
                  <h1 className="title">{title}</h1>
                  <h2 className="subtitle">{subtitle}</h2>
                  <h2 className="subtitle">{main}</h2>
                  <hr />
                  <h2 className="subtitle">
                    <strong>{strong}</strong>
                  </h2>
                </div>
                <br />
                {child}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FormInfoContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  main: PropTypes.string,
  strong: PropTypes.string,
  child: PropTypes.object,
};

export default FormInfoContainer;
