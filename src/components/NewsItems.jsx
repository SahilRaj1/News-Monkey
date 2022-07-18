import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <div className='container my-3'>
                <div className="news container card my-3">
                    <img src={imageUrl ? imageUrl : "https://slidesmania.com/wp-content/uploads/2021/01/Newspapers-789x444.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-primary">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                            {source}
                            <span className="visually-hidden"></span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
