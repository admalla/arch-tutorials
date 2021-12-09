import React from 'react';

export default class Profileclass extends React.Component {
  render() {
    let firstName = this.props.name.slice(0, 4);
    return (
      <div>
        Привет <b>{firstName}!</b>
        <p>Дата регистрации: {this.props.registredAt}</p>
      </div>
    );
  }
}
