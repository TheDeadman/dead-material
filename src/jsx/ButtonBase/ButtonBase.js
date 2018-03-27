import React from 'react'
import { Link } from 'react-router-dom'

class ButtonBase extends React.Component {
    render() {
        return (
            <Link 
                className={`waves-effect waves-light btn ${this.props.additionalClasses}`}
                to={this.props.to}
            > 
                {this.props.content} 
            </Link>
        )
    }
}

export default ButtonBase