import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Input } from '@chakra-ui/react';
import css from './ContactForm.module.css';

export default function ContactForm() {
  let dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const addNewContact = ({ name, phone }, setSubmitting, resetForm) => {
    const newContact = {
      id: nanoid(),
      name,
      number: phone,
    };
    if (
      items
        .map(item =>
          item.name.toLowerCase().includes(newContact.name.toLowerCase())
        )
        .some(name => name === true)
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      setSubmitting(true);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (
          !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
            values.name
          )
        ) {
          errors.name = 'Invalid Name';
        }
        if (!values.phone) {
          errors.phone = 'Required';
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.phone
          )
        ) {
          errors.phone = 'Invalid Phonenumber';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addNewContact(values, setSubmitting, resetForm);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className={css.div}>
            <p>Name</p>
            <Input
              size="sm"
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              className={css.input}
            />
            {errors.name && touched.name && errors.name}
          </div>

          <div className={css.div}>
            <p>Number</p>
            <Input
              size="sm"
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={values.phone}
              onBlur={handleBlur}
              className={css.input}
            />
            {errors.phone && touched.phone && errors.phone}
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      )}
    </Formik>
  );
}
