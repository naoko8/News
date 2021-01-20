import React, { Component } from "react";


class business extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ebad96beacfe4d14aaefd4ade21f083b')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                articles: myJson.articles
            });
        });
    }

    render(){
            return (
            <div>
                {this.state.articles.slice(0, 10).map((item,index) => {
                    return (
                    <div className ="business_css">
                        <a href={item.url}> <img className="business_img" src={item.urlToImage}></img></a>
                        <p className="business_author"> {item.author}</p>
                        <p className="business_title">
                            {item.title}
                        </p>
                    </div>
                    );
                })}
            </div>
            );
    }
}

export default business;