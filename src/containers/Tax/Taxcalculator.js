import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './Taxcalculator.css';
import axios from 'axios';


class Taxcalculator extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         duration: '6',
         loan: 500,
         isLoan: false,
         interest:'',
         monthlyPay: '',
         principal: ''
      }
      this.onInputChange = this.onInputChange.bind(this);
      this.onRangeChange = this.onRangeChange.bind(this);
    }


    async onInputChange(event) {
        await this.setState({
            duration: event.target.value
        });
        this.onSubmit()
            
	}

	async onRangeChange(event) {
        await this.setState({
            loan: event.target.value,
        });
        this.onSubmit()
    }
    
    onSubmit = () => {
         axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.loan}&numMonths=${this.state.duration}`)
                .then(res => {
                    console.log(res.data)
                    this.setState({ 
                        interest: res.data.interestRate,
                        monthlyPay: res.data.monthlyPayment.amount,
                        principal: res.data.principal.amount
                    });
                })
                .catch(error => console.log(error));
    }
  
    
    render() {
        return (
            <div>
                <Form>
                    <h1>Interest Finder</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: '500' }}>Enter the Loan duration : </Form.Label>

                        <select className="form-control input" value={this.state.duration} onChange={this.onInputChange}>
                        <option value='6'>6 months</option>
                        <option value='7'>7 months</option>
                        <option value='8'>8 months</option>
                        <option value='9'>9 months</option>
                        <option value='10'>10 months</option>
                        <option value='11'>11 months</option>
                        <option value='12'>12 months</option>
                        </select>
                        
                        <div className="range-container">
                        <div className="range-slider">
                            <span id="rs-bullet" className="rs-label">{this.state.loan}</span>
                            <input id="rs-range-line" className="rs-range" type="range" value={this.state.loan} onChange={this.onRangeChange} min="500" max="5000" step="50" />
                            
                        </div>
                        <div className="box-minmax">
                            <span>$500</span><span>$5000</span>
                        </div>
                        </div>

                    </Form.Group>
               </Form>
               <div className="output">
                <h5>Interest - {this.state.interest}%</h5>
                <h6>Monthly Payment - ${this.state.monthlyPay}</h6>
                <h6>Principal amount - ${this.state.principal}</h6>
               </div>
               <div className="copyright">
               <h4>By Shubham Dhage</h4>
               </div>
            </div>
        );
    }
}

export default Taxcalculator;