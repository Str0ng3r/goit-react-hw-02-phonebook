import PropTypes from 'prop-types';
export const RenderSearch = ({ filtertg, funcfiltr }) => {
  return <input type="text" value={filtertg} onChange={funcfiltr} />;
};
RenderSearch.propTypes = {
  filtertg: PropTypes.string.isRequired,
  funcfiltr: PropTypes.func.isRequired,
};
