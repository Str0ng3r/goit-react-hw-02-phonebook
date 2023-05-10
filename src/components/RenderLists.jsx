import PropTypes from 'prop-types';
import { RendLi } from './RendLi';
export const ContactList = ({ funcArr, funcDel }) => {
  return (
    <ul>
      {funcArr().map(contact => (
        <RendLi
          id={contact.id}
          name={contact.name}
          number={contact.number}
          fcDel={funcDel}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  funcArr: PropTypes.func.isRequired,
  funcDel: PropTypes.func.isRequired,
};
