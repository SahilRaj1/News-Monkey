import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div className='container my-3'>
                <div className="container card my-3">
                    <img src={imageUrl?imageUrl:"https://slidesmania.com/wp-content/uploads/2021/01/Newspapers-789x444.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
