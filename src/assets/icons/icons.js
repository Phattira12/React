import React from 'react';
import PropTypes from 'prop-types';
import iconPath from '../icons/iconsLib';

const Icon = ({ size, color, icon, className, style, viewBox }) => {
  return (
    <svg className={className} style={{ textAlign: 'center' }} viewBox={viewBox} width={`${size}px`} height={`${size}px`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path fill={color} d={iconPath[icon]} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: '#000000',
  viewBox: '0 0 24 24',
  style: {},
  className: '',
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;