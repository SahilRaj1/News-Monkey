import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

  articles = [
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "⭐ &#x27;The Champions&#x27; Season Finale ⭐",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/244201-the-champions-season-6-episode-3",
      "urlToImage": null,
      "publishedAt": "2022-06-15T17:37:27.3831502Z",
      "content": null
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "Live Bradley Beal Interview ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/244886-taylor-rooks-x-bradley-beal",
      "urlToImage": null,
      "publishedAt": "2022-06-15T17:22:35.1827416Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "Daily Briefing",
      "description": "The day's top stories, from sports to movies to politics to world events.",
      "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
      "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
      "publishedAt": "2021-08-15T15:35:07+00:00",
      "content": "The day's top stories, from sports to movies to politics to world events."
    },
    {
      "source": {
        "id": "the-washington-times",
        "name": "The Washington Times"
      },
      "author": "The Washington Times http://www.washingtontimes.com",
      "title": "Latest Quizzes",
      "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      "url": "https://www.washingtontimes.com/quiz/",
      "urlToImage": null,
      "publishedAt": "2021-02-10T03:52:37.2719772Z",
      "content": "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <>
        <div className="cotnainer my-3 mx-4">
          <h1>Top Headlines</h1>
          <div className='container row'>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDesc" imageUrl="https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg" newsUrl="TODO" />
            </div>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDesc" />
            </div>
            <div className="col-md-3">
              <NewsItems title="myTitle" description="myDesc" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
