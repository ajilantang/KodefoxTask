import React from 'react';
export type Event = {
  target: {
    value: string,
  },
};
type Props = {
  style: Object,
  onChangeValue: (event: Event) => void,
  inputPhone: string,
  inputName: string,
  onAddUser: () => void,
};
export default function addNewContact(props) {
  let {style, onChangeValue, inputPhone, inputName, onAddUser} = props;
  let result = (
    <div style={style.child}>
      <div style={style.form}>
        <label style={{marginRight: 20}}> User Name (Github)</label>
        <input
          onChange={(event) => onChangeValue('inputName', event.target.value)}
          value={inputName}
        />
      </div>
      <div style={style.form}>
        <label style={{marginRight: 51}}>Phone Number </label>
        <input
          onChange={(event) => onChangeValue('inputPhone', event.target.value)}
          value={inputPhone}
        />
      </div>
      <div />
      <div />
      <button style={{width: '20%'}} onClick={() => onAddUser()}>
        Submit
      </button>
    </div>
  );
  return result;
}
