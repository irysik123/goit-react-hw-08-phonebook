import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

const ContactList = ({ list }) => {
  let dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.ul}>
      {list.map(({ id, name, number }) => (
        <li className={css.li} key={id}>
          <p className={css.contact}>{name}</p>
          <p className={css.contact}>{number}</p>
          <button
            className={css.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};
