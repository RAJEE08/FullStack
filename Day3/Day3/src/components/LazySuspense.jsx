import React from 'react';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import loader from '../assets/images/loader.gif';

function LazySuspense({ component: Component, ...rest }) {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <img src={loader} alt="Loader" />
        </div>
      }
    >
      <Component {...rest} />
    </Suspense>
  );
}

LazySuspense.propTypes = {
  component: PropTypes.element.isRequired,
};

export default LazySuspense;
