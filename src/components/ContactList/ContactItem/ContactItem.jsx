import PropTypes from 'prop-types';
import styles from '../contactList.module.css';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id} className={styles.contact_item}>
      <p>
        {contact.name}: {contact.number}
      </p>

      <button
        className={styles.button}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
