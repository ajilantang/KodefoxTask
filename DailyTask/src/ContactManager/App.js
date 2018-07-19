//@flow
import React from 'react';
import ContactForm from './AddNewContact';
import Contact from './Contact';
import fetchGithubData from './Api/ApiGithub';
type State = {
  contactList: Array<Object>,
  inputName: string,
  inputPhone: string,
};
let style = {
  flexcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  child: {
    width: '50%',
    marginLeft: 100,
    marginTop: 100,
  },
  form: {
    width: '50%',
  },
};
export default class ContactManager extends React.Component<Object, State> {
  state = {
    inputName: '',
    inputPhone: '',
    contactList: [],
  };
  _onAddUser = () => {
    let {inputName} = this.state;
    fetchGithubData(inputName)
      .then((contact) => {
        let {
          public_repos,
          avatar_url,
          followers,
          following,
          url,
          name,
        } = contact;
        let github = {
          publicRepos: public_repos,
          avatar: avatar_url,
          url,
          followers,
          following,
          name,
        };
        this.setState({
          contactList: this.state.contactList.concat({
            github: github,
            phoneNumber: this.state.inputPhone,
            contactName: this.state.inputName,
            isGithub: true,
          }),
          inputName: '',
          inputPhone: '',
        });
      })
      .catch((err) => this._confirmationAlert());
  };

  _confirmationAlert = () => {
    let isConfirm = confirm(
      'do you want to save but this contact dont have github account',
    );
    let {inputName, inputPhone, contactList} = this.state;
    if (isConfirm) {
      this.setState({
        contactList: this.state.contactList.concat({
          contactName: inputName,
          phoneNumber: inputPhone,
          github: {},
          isGithub: false,
        }),
        inputName: '',
        inputPhone: '',
      });
    }
  };
  _onChangeValue = (params: string, input: string) => {
    this.setState({
      [params]: input,
    });
  };
  render() {
    let {inputName, contactList, inputPhone} = this.state;
    let Contacts = contactList.map((contact, index) => (
      <Contact key={index} {...contact} isGithub={contact.isGithub} />
    ));
    return (
      <div style={style.flexcontainer}>
        <ContactForm
          style={style}
          onChangeValue={this._onChangeValue}
          onAddUser={this._onAddUser}
          inputName={inputName}
          inputPhone={inputPhone}
        />
        <div />
        <div />
        <div>{Contacts}</div>
      </div>
    );
  }
}
