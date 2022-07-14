import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9560ffedb2164314aab25c878757e27e&page=${this.state.page}&pageSize=3`;
    let data = await fetch(url);
    this.setState({loading: true})
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9560ffedb2164314aab25c878757e27e&page=${this.state.page - 1}&pageSize=3`;
    let data = await fetch(url);
    this.setState({loading: true})
    let parsedData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 3)) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9560ffedb2164314aab25c878757e27e&page=${this.state.page + 1}&pageSize=3`;
      let data = await fetch(url);
    this.setState({loading: true})
    let parsedData = await data.json();
      this.setState({
        loading: false,
        page: this.state.page + 1,
        articles: parsedData.articles
      });
    }
  }

  render() {
    return (
      <>
        <div className="cotnainer my-3 mx-4" >
          <h1 style={{ textAlign: "center" }}>News Monkey - Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className='row' style={{ margin: "auto" }}>
            {!(this.state.loading) && this.state.articles.map((element) => {
              return <div className="col-md-4" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                <NewsItems key={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
          <div className="container" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
            <button type="button" className="btn btn-dark mx-3 my-2" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark mx-3 my-2" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 3)} onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}
