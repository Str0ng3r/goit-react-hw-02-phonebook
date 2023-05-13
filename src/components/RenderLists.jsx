import PropTypes from 'prop-types';
import { RendLi } from './RendLi';

export const ContactList = ({funcDel}) => {
  const savedContacts = JSON.parse(
    localStorage.getItem('contactsLocale')
  );
  return (
    <ul>
      {savedContacts.map(contact => (
        <RendLi
          key={contact.id} // добавляем ключ
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
  funcDel: PropTypes.func.isRequired,
};