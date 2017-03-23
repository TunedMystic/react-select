import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class OptionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: []
        }
        this.onOptionSelect = this.onOptionSelect.bind(this);
    }

    fetchOptions() {
        const url = [
            'https://raw.githubusercontent.com',
            'TunedMystic/test-links/master/optionData.json'
        ].join('/')

        return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return {
                options: json
            }
        })
    }

    onOptionSelect(value) {
        console.log(`Value has been selected.`);
        console.log(value);
        this.setState({value: value});
    }

    render() {
        return (
            <div className="OptionTable">
                <p className="OptionTable-intro">Option Table Component</p>
                <Select.Async
                    multi
                    name='option-table-select'
                    value={this.state.value}
                    loadOptions={this.fetchOptions}
                    onChange={this.onOptionSelect}
                />
            </div>
        );
    }
}

export default OptionTable;
