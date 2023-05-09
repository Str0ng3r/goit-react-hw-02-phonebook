import { Component } from 'react';
import { nanoid } from 'nanoid';
import { RenderForms } from './RenderForms';
import { RenderSearch } from './RenderSearch';
import { RenderList } from './RenderLists';
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
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  updateName = evt => {
    this.setState({ name: evt.target.value });
  };

  updateNum = evt => {
    this.setState({ number: evt.target.value });
  };
  searchFiltr = evt => {
    this.setState({ filter: evt.target.value });
  };



  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  updateState = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const isNameAlreadyExists = this.state.contacts.some(contact => contact.name === name);
    isNameAlreadyExists ? alert('Таке імья вже існує') : 
  this.setState(prevState => ({
    contacts: [...prevState.contacts, { id: nanoid(), name, number }],
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
        <RenderForms
          funcname={this.updateName}
          nametg={this.state.name}
          funcnum={this.updateNum}
          numtg={this.state.number}
          funcupdate={this.updateState}
        ></RenderForms>

        <h2>Contacts</h2>
        <h3>Find Contacts by Name</h3>
        <RenderSearch
          filtertg={this.state.filter}
          funcfiltr={this.searchFiltr}
        ></RenderSearch>
        <RenderList funcArr={this.filterContactsByName} funcDel={this.deleteContact}></RenderList>
      </div>
    );
  }
}
