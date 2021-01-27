import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            result: 0
        }
    }
    static getDerivedStateFromProps(props, state){
        return {rate: props.rate}
    } // props tuck in State
    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements; // got forms
        let  countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({result: (countCurrency / this.state.rate[typeCurrency])}) // divide the transmitted value by
        // the currency rate
    }
    render(){
        return (
            <div className='calc'>
                <h3>Калкулятор обмена</h3>
                <div className='block'>
                    <div>Я хочу</div>
                    <div>
                        <form onSubmit={this.calcRate}>
                        <input type='number' defaultValue='150' name='count-currency'/>
                        <select name='type-currency' id=''>
                            {Object.keys(this.props.rate).map((keyName, i) =>
                                (
                                  <option key={keyName } defaultValue={keyName}>
                                      {keyName}
                                  </option>

                                )
                            )};
                        </select>
                            <input type="submit" defaultValue='calc'/>
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className='calc-res'>
                            <li>EUR {this.state.result}</li>

                        </ul>
                    </div>
                </div>
                        </div>

    );
    }
    }
    export default Calc;
