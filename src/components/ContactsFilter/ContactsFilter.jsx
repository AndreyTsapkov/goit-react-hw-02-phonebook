import { FilterTitle, InputFilter, LabelFilter } from './ContactsFilter.styled';
import { PropTypes } from 'prop-types';

export const ContactsFilter = ({ filter, onChange }) => {
  return (
    <LabelFilter>
      <FilterTitle>Find contacts by name or number</FilterTitle>
      <InputFilter type="text" value={filter} onChange={onChange}></InputFilter>
    </LabelFilter>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
