import React, { Component } from "react";


class WallStreet extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=ebad96beacfe4d14aaefd4ade21f083b')
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
            <div className ="wallstreet">
                <h2>Wall Street News</h2>
                <br></br>
                {this.state.articles.map((item,index) => {
                    return (
                    <div>
                        <img className ="wallstreet_img"src={item.urlToImage} style={{width:'35vw'}}/>
                        <div className="wallstreet_text">
                        <p>
                            {item.publishedAt}
                        </p>
                        <p>{item.description}</p>
                        <p>{item.content}</p>
                        <a href={item.url}>URL</a>
                        </div>
                    </div>
                    );
                })}
            </div>
            );
    }
}

export default WallStreet;