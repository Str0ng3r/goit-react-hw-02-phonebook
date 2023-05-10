import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './RendForm';
import { Filter } from './RenderSearch';
import { ContactList } from './RenderLists';

export class App extends Component {
  state = {
    contacts: [
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
filter: '',
};

filterContactsByName = () => {
return this.state.contacts.filter((contact) =>
contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
);
};

deleteContact = (id) => {
this.setState((prevState) => ({
contacts: prevState.contacts.filter((contact) => contact.id !== id),
}));
};

addContact = (name, number) => {
const isNameAlreadyExists = this.state.contacts.some(
(contact) => contact.name === name
);
if (isNameAlreadyExists) {
alert('Таке імя вже існує')
return;
}
const newContact = {
  id: nanoid(),
  name,
  number,
};

this.setState((prevState) => ({
  contacts: [...prevState.contacts, newContact],
  filter: '',
}));
};

searchFilter = (evt) => {
this.setState({ filter: evt.target.value });
};

render() {
const { filter } = this.state;

return (
  <div
    style={{
      flexDirection:'column',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
  >
    <ContactForm addContact={this.addContact} />

    <h2>Contacts</h2>
    <h3>Find Contacts by Name</h3>
    <Filter
          filtertg={filter}
          funcfiltr={this.searchFilter}
        ></Filter>
   <ContactList funcArr={this.filterContactsByName} funcDel={this.deleteContact}></ContactList>
  </div>
);
}
}
