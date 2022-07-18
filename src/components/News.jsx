import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static defaultProps = {
    country: "in",
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9560ffedb2164314aab25c878757e27e&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    this.props.setProgress(30);
    this.setState({ loading: true })
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9560ffedb2164314aab25c878757e27e&page=${this.state.page+1}&pageSize=12`;
    this.setState({page: this.state.page + 1})
    let data = await fetch(url);
    this.setState({ loading: true })
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  render() {
    return (
      <>
        <div className="cotnainer my-4 mx-4" >
          <h1 style={{ textAlign: "center", marginTop: "90px" }}>News Monkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader=<Spinner />
          >
            <div className='row' style={{ margin: "auto" }}>
              {this.state.articles.map((element) => {
                return <div className="col-md-4" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                  <NewsItems key={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </InfiniteScroll>
          {/* <div className="container my-5" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
            <button type="button" className="btn btn-primary mx-3 my-2" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-primary mx-3 my-2" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
        </div>
      </>
    )
  }
}
