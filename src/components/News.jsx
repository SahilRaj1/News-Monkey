import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9560ffedb2164314aab25c878757e27e";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:  parsedData.articles});
    console.log(this.articles);
  }

  render() {
    return (
      <>
        <div className="cotnainer my-3 mx-4" >
          <h1 style={{ textAlign: "center" }}>Top Headlines</h1>
          <div className='row' style={{ margin: "auto" }}>
            {this.state.articles.map((element) => {
              return <div className="col-md-4" style={{ align: "center" }}>
                <NewsItems key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>
      </>
    )
  }
}
