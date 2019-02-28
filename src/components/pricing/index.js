import React, { Component } from "react";
import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Excepteur non irure nulla eiusmod sit laborum eu do elit sunt. Non nisi veniam anim magna qui do ullamco non laborum ad quis aliquip dolor. Quis officia esse id magna proident Lorem reprehenderit pariatur laborum in et. Nostrud qui minim Lorem laboris aliqua.",
      "Esse consequat exercitation. Amet ex cupidatat Lorem magna velit. Occaecat eu cillum esse nostrud non ea sit consequat. Qui proident cupidatat adipisicing tempor. Laboris excepteur elit id sit dolor pariatur nisi non aute fugiat irure enim. Magna fugiat ea commodo sit nisi ad veniam.",
      "Velit Lorem amet occaecat non do occaecat. Labore proident qui anim proident sint id cillum. Ullamco deserunt est elit magna ea laboris. Reprehenderit velit sunt aute do et officia enim fugiat. Duis veniam cupidatat non irure velit amet exercitation Lorem cupidatat consectetur."
    ],
    linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
