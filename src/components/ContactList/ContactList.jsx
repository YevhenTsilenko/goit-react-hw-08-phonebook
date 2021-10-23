import { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contacts/operations';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList ({ contacts, onDelete,getContacts}) {
    useEffect(() => {
      getContacts();
    }, [getContacts])

    return (
        <ul className={styles.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact}>
            <span>
              {name}: {number}
            </span>
            <button
              className={styles.delete_button}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
}


const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state)
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  getContacts: () => dispatch(getContacts())
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  getContacts: PropTypes.func,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);