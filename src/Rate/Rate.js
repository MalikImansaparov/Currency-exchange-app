import React from 'react';
import './Rate.css';
import Calc from "../Calc/Calc";

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': ' ',
            'currencyRate': {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP']; //choose which currency us showing
        this.getRate();
    }
    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
            return data.json()
        })
            .then(data => {
                console.log(data);
            this.setState({date : data.date});
                let result = { };
                for( let i=0; i <this.currency.length; i++){    // got necessary currency
                    result[this.currency[i]] = data.rates[this.currency[i]]
                }
                console.log(result)
                this.setState({currencyRate : result}) // insert in state
    });
    }
    render(){
        return (
                <div className='rate'>
                    <h3>Курс валют на {this.state.date}</h3>
                    <div className='flex-container'>
                        {Object.keys(this.state.currencyRate).map((keyName, i) => // got keys and  on them map
                            (
                                <div className='block flex-item' key={keyName}>
                                    <div className='currency-name'>{keyName}</div>
                                    <div className='currency-in'>{this.state.currencyRate[keyName].toFixed(2)}</div> //showing rate even if there is more than a sign after the commas, so as not to interfere
                                    <p> * можно купить за 1 EUR</p>
                                </div>
                            )
                        )}
                            </div>
                    <Calc rate={this.state.currencyRate}/>
                        </div>


    );
    }
    }
    export default Rate;
