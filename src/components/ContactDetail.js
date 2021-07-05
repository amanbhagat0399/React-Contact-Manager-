import React from 'react'
import { Link } from "react-router-dom";
import steve from '../images/steve.jpg'

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={steve} alt="user" />
                </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
            </div>
            <div className="center-div">
                <Link to="/"><button type="button" className="fluid ui button black">Back to Contact List</button></Link>
            </div>
        </div>
    )
}
export default ContactDetail;
