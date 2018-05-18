import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const LayoutPage = ({ title, link, meta, children }) => {
  return (
    <div>
      <Helmet title={title} link={link} meta={meta} />
      { children }
    </div>
  );
};

LayoutPage.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired,
  meta: PropTypes.array.isRequired
};

export default LayoutPage;

