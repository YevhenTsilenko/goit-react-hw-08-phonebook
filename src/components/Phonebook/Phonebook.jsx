import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../redux/contacts/selectors';
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";

function Phonebook ({ contacts }) {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            {contacts.length > 0 &&
            <> 
            <Filter />
            <h2>Contacts</h2>
            </>
            }
            <ContactList />
        </div>
    );
};

const mapStateToProps = (state) => ({
    contacts: getContacts(state),
});
  
Phonebook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(Phonebook);