import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
      event.preventDefault();

      //call callback from parent component
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={this.onInputChange} value={this.state.term} type="text" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;