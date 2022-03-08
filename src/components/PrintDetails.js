import React from 'react';
import PropTypes from 'prop-types';

const PrintDetails = ({ stockDetails }) => Object.entries(stockDetails).map(([id, value]) => (
  <li key={id}>
    <p>{id}</p>
    <p>{(value !== null) ? value : 'N/A'}</p>
  </li>
));

PrintDetails.propTypes = {
  stockDetails: PropTypes.shape([PropTypes.string, PropTypes.number]).isRequired,
};

export default PrintDetails;
