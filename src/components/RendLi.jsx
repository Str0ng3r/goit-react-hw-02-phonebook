import PropTypes from 'prop-types';
export const RendLi = ({ id, name, number, fcDel}) => {
  return (
    <li key={id}>
      {name}: {number}
      <button data-del={id} onClick={() => fcDel(id)}>
        DEL
      </button>
    </li>
  );
};
RendLi.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  fcDel: PropTypes.func.isRequired,
};
