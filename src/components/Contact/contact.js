import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/users/selectors';
import { deleteContact } from 'redux/users/slice';
import css from './Contact.module.css';

function Contact() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContacts();

  return visibleContact.map(({ id, name, number }) => (
    <li key={id} className={css.contactRow}>
      {name}:{number}
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
}

export default Contact;
