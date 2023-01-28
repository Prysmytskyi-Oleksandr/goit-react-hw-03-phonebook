import ContactItem from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
import styles from './contactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ol className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
