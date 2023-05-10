import PropTypes from 'prop-types';
export const Filter = ({ filtertg, funcfiltr }) => {
  return <input type="text" value={filtertg} onChange={funcfiltr} />;
};
Filter.propTypes = {
  filtertg: PropTypes.string.isRequired,
  funcfiltr: PropTypes.func.isRequired,
};
