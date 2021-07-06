import React , {useRef}from 'react'
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';
const ContactList = (props) => {
    console.log(props);
    const inputElement = useRef("");
    const deleteContactHandler =(id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {

        return (

            <ContactCard contact={contact} clickHandler = {deleteContactHandler}></ContactCard>
        );
    });

    const getSearchTerm =() => {
        // console.log(inputElement.current.value);
        props.searchKeyword(inputElement.current.value);
    }
    return (
        <div className="ui main">
            <Link to='/add'>
            <button className="ui button right floated black" >Add Contact</button>
            </Link> 
            <h1>Contact List</h1>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputElement}  type="text" placeholder="Search Contact" className="prompt" value={props.term}  onChange={getSearchTerm}/>
                    <i className=" ui search icon"></i>
                </div>
                </div>
            <div className="ui celled list">
                {renderContactList.length >0 ? renderContactList : "No Contacts Available !!!"}
            </div>
        </div>
    )
};

export default ContactList;