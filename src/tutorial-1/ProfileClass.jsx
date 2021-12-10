import React from 'react';

export default class Profileclass extends React.Component {
  render() {
    const firstName = this.props.name.split(' ')[0];
    return (
      <div>
        Привет, <b>{firstName}!</b>
        <p>Дата регистрации: {this.props.registredAt}</p>
      </div>
    );
  }
}
