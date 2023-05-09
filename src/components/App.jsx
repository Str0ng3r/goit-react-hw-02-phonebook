import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
    number: '',
  };



  filterContactsByName = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

// updateName = evt => {
//   this.setState({ name: evt.target.value })
// }

// updateNum = evt => {
//   this.setState({ number: evt.target.value })
// }

  updateState = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      filter: '',
      number: '',
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        
        <form>
          <h1>PhoneBook</h1>
          <h2>Name</h2>
          <input
            onChange={evt => this.setState({ name: evt.target.value })}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            onChange={evt => this.setState({ number: evt.target.value })}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button onClick={this.updateState}>Add</button>
        </form> 

        <h2>Contacts</h2>
        <h3>Find Contacts by Name</h3>
        <input type="text" 
        value={this.state.filter}
        onChange={evt => this.setState({filter:evt.target.value})}
/>
        <ul>
  {this.filterContactsByName().map((contact) => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
    </li>
  ))}
        </ul>
      </div>
    );
  }
}