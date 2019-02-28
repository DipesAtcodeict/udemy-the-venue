import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {


    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage=()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage();
        },30)
    }
    
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
             onReveal={()=>this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart} %</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase ticket before 20th June</h3>
              <p>
                Nulla et labore id tempor id officia ipsum tempor. Est irure
                sunt non dolore cillum. Nulla sit qui id id do mollit eiusmod
                sit labore anim nostrud ea aliqua sunt. Dolor sunt elit est
                labore veniam qui consectetur incididunt reprehenderit labore.
              </p>

              <MyButton 
                text="Purchase tickets"
                bck="#fa8000"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
