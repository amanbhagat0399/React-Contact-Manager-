import React, { Component } from 'react'

import {Link} from 'react-router-dom';

class AddContact extends Component {
    state = {
        name: '',
        email: ''
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert('All the fields are Mendatory')
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        console.log(this.state)
        console.log(this.props);
        // console.log(this.props.history);
        // this.props.router.push('/')
    };
    render() {
        return (
            <div className="ui main">
                <h1> Add Contact </h1>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button type="submit" className=" ui  button black">Add Contact</button>
                    <Link to='/'>
                        <button className="ui button right floated black" >Contact List</button>
                    </Link>
                </form>
            </div>
        ) 
    }
}
export default AddContact;
