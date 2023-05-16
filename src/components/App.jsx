import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './RendForm';
import { Filter } from './RenderSearch';
import { ContactList } from './RenderLists';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contactsLocale'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'contactsLocale',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: updatedContacts,
      };
    });
  };

  addContact = (name, number) => {
    const isNameAlreadyExists = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isNameAlreadyExists) {
      alert('Таке імя вже існує');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
        filter: '',
      }),
      () => {
        localStorage.setItem(
          'contactsLocale',
          JSON.stringify(this.state.contacts)
        );
        const savedContacts = JSON.parse(
          localStorage.getItem('contactsLocale')
        );
        console.log(savedContacts);
      }
    );
  };

  searchFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          flexDirection: 'column',
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
        <Filter filtertg={filter} funcfiltr={this.searchFilter} />
        <ContactList
          contacts={this.filterContactsByName}
          funcDel={this.deleteContact}
        />
      </div>
    );
  }
}
