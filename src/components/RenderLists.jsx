import PropTypes from 'prop-types';
export const RenderList = ({ funcArr,funcDel }) => {
  return (
    <ul>
      {funcArr().map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button data-del={contact.id} onClick={() => funcDel(contact.id)}>DEL</button>
        </li>
      ))}
    </ul>
  );
};
RenderList.propTypes = {
  funcArr: PropTypes.func.isRequired,
  funcDel: PropTypes.func.isRequired
};
