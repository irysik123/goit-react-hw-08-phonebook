import { setFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@chakra-ui/react';
import css from './Filter.module.css'

const Filter = () => {
  let dispatch = useDispatch();

  let filter = useSelector(state => state.filter);

  function handleFilterChange(event) {
    dispatch(setFilter(event.target.value));
  }

  return (
    <div className={css.div}>
      <Input
        size="sm"
        type="text"
        name="name"
        onChange={handleFilterChange}
        value={filter}
        className={css.input}
      />
    </div>
  );
};

export default Filter;

// import PropTypes from 'prop-types';
// import { Container } from './Filter.styled';

// const Filter = ({ handleFilterChange, value}) => {
//     return (
//         <Container>
//             <input
//           type="text"
//           name="name"
//           onChange={handleFilterChange}
//           value={value}
//         />
//         </Container>
//     )
// }

// export default Filter;

// Filter.propTypes = {
//     handleFilterChange: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired
// }
