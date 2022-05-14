import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    state = {text:""}
    
    onSubmitForm = (event) =>{
        event.preventDefault();
        this.props.onSubmitForm(this.state.text);
    }

    render(){
        return (
            <div className="search ui segment">
                <form onSubmit={this.onSubmitForm}>
                    <label>Search</label>
                    <input className="ui input" type="search" placeholder="Search..." value={this.state.text} onChange={(e) => {this.setState({text: e.target.value})}} name="search"/>
                </form>
            </div>
          );
    }
  
}

export default SearchBar;
