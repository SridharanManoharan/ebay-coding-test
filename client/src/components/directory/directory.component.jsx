import React from 'react'
import axios from 'axios'
import MenuItem from '../menu-items/menu-item.component'
import FormInput from '../form-input/form-input.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            error: null,
            sections: []
        }
    }

    componentDidMount() {
        let _this = this;
        axios.get('/ad-single')
            .then(function (response) {
                let section = [];
                section.push(response.data);
                console.log(section);
                _this.setState({
                    sections : section,
                    isLoading : true
            })
        })
    }

    render() {
        return (
            <section className='directory-wrapper'>
                {
                    this.state.isLoading ?
                    <div>
                        <div className='directory-menu'>
                            {this.state.sections.map(({id, ...otherSectionProps}) => (
                                <MenuItem key={id} {...otherSectionProps} ></MenuItem>
                            ))}
                        </div>
                        <div className='description'>
                            <span>
                                {this.state.sections[0].description}
                            </span>
                        </div>
                        <div className='write-message'>
                            <p>Write a message</p>
                            <hr />
                            <FormInput />
                        </div>
                    </div>
                    :
                    <h2> Loading ...</h2>
                }
            </section>
        )
    }
}

export default Directory