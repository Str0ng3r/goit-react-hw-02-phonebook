import PropTypes from 'prop-types';
import { RendLi } from './RendLi';

export const ContactList = ({ contacts, funcDel }) => {
  const filteredContacts = contacts();
  return (
    <ul>
      {filteredContacts.map(contact => (
        <RendLi
          key={contact.id}
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
  contacts: PropTypes.func.isRequired,
  funcDel: PropTypes.func.isRequired,
};
