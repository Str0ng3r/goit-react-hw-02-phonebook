import PropTypes from 'prop-types';
export const RenderForms = ({
  funcname,
  nametg,
  funcnum,
  numtg,
  funcupdate,
}) => {
  return (
    <form>
      <h1>PhoneBook</h1>
      <h2>Name</h2>
      <input
        onChange={funcname}
        type="text"
        name="name"
        value={nametg}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        onChange={funcnum}
        value={numtg}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button onClick={funcupdate}>Add</button>
    </form>
  );
};
RenderForms.propTypes = {
  funcname: PropTypes.func.isRequired,
  nametg: PropTypes.string.isRequired,
  funcnum: PropTypes.func.isRequired,
  numtg: PropTypes.string.isRequired,
  funcupdate: PropTypes.func.isRequired,
};
