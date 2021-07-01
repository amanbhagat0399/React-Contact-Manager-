import React from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';
const ContactList = (props) => {

    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {

        return (

            <ContactCard contact={contact} clickHandler = {deleteContactHandler}></ContactCard>
        );
    });
    return (
        <div className="ui main">
            <Link to='/add'>
            <button className="ui button right floated black" >Add Contact</button>
            </Link> 
            <h1>Contact List</h1>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
};

export default ContactList;