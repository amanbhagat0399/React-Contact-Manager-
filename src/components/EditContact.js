import React, { Component } from 'react'

import {Link} from 'react-router-dom';

class EditContact extends Component {
    constructor (props) {
        super(props);
        console.log(props)
        // const {id, name, email} =props.location.state.contact;
    };
    state = {
        name: '',
        email: ''
    };
    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert('All the fields are Mendatory')
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name: "", email: "" });
        console.log(this.state)
        console.log(this.props);
        // console.log(this.props.history);
        // this.props.router.push('/')
    };
    render() {
        return (
            <div className="ui main">
                <h1> Edit Contact </h1>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button type="submit" className=" ui  button black">Update Contact</button>
                    <Link to='/'>
                        <button className="ui button right floated black" >Contact List</button>
                    </Link>
                </form>
            </div>
        ) 
    }
}
export default EditContact;
