import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ebad96beacfe4d14aaefd4ade21f083b')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                articles: myJson.articles
            });
        });
    }

}

class HomeCarousel extends MainPage {
    render() {
      return (
        <Carousel>
          {this.state.articles.slice(0, 3).map((item, index) => {
            return (
              <div key={index} className="carousel">
                <img src={item.urlToImage} />
                <a href={item.url} className="legend">
                  {item.url}
                </a>
              </div>
            );
          })}
        </Carousel>
      );
    }
  }


export default HomeCarousel;
