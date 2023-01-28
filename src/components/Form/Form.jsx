import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameId = nanoid();
    const numberId = nanoid();

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Enter the name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <label htmlFor={numberId}>Number</label>
        <input
          id={numberId}
          type="tel"
          name="number"
          value={this.state.number}
          placeholder="Enter the number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />

        <button type="submit" className={styles.btn_form}>
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
