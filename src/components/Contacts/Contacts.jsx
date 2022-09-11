import {
  Contact,
  ContactsItem,
  ContactsList,
  ButtonDelete,
} from './Contacts.styled';
import { PropTypes } from 'prop-types';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ButtonDelete>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
