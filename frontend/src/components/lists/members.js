import React, { Component } from 'react'
import '../../App.css'
import axios from 'axios'
import Navbar from '../navbar/navbar'
import constants from '../../utils/constants'

class Member extends Component {

    render() {
        return (
            <div className="listContainer border-bottom pt-2 pb-1">

                {/* Owner name and image */}
                <div className="row">
                    <div className="col-md-1">
                        <img src={this.props.value.imageURL ? this.props.value.imageURL : "https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png"} className="img-fluid" />
                    </div>
                    <div className="col-md-11">
                        <h6 className="font-weight-bolder">{this.props.value.name} </h6>
                        <h6 className="font-weight-lighter text-secondary"> @{this.props.value.userName}</h6>
                        <h6 className="font-weight-lighter text-dark"> {this.props.value.description}</h6>
                    </div>
                </div>

            </div>
        )
    }
}
//export Member Component
export default Member