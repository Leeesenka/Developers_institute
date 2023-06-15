import React from "react";
import quotes from './QuotesDatabase'
import './QuotesChange.css';
import { Helmet } from 'react-helmet';

class QuotesChange extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuote: '',
            currentAuthor: '',
            colors:['#20B2AA', '#4682B4', '#00008B','#A52A2A', '#696969', '#D2691E', '#BC8F8F'],
            currentColor: '',
            }
        }
    

        changeQuote = () => {
            let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
            let randomColorIndex = Math.floor(Math.random() * this.state.colors.length);
            this.setState({
                currentQuote: quotes[randomQuoteIndex].quote,
                currentAuthor: quotes[randomQuoteIndex].author,
                currentColor: this.state.colors[randomColorIndex],
            });
        }

    componentDidMount(){
        this.changeQuote();
    }
    
    render() {
        return (
          <>
            <Helmet>
                <style>{`body { background-color: ${this.state.currentColor}; }`}</style>
            </Helmet>
            <div className="text">
                <h1 style={{color:this.state.currentColor}}>"{this.state.currentQuote}"</h1>
                <p style={{color:this.state.currentColor}}>-{this.state.currentAuthor}-</p>
                <button id="newquote" onClick={this.changeQuote} style={{ backgroundColor: this.state.currentColor }}>
                    New quote
                </button>
            </div>
            </>
        )
    }
}

export default QuotesChange;