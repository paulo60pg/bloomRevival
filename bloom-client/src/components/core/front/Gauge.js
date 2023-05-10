import React from 'react';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge from 'react-liquid-gauge';

import Global from '../../../Global';
class Gauge extends React.Component {
  state = {
    value: 0,
  };
  startColor = Global.color.light;
  endColor = Global.color.light;

  componentDidMount() {
    this.setState({
      value: 0,
    });
    let finalNote = this.props.finalNote;
    if (isNaN(finalNote)) {
      return (finalNote = 0);
    }
    setTimeout(
      this.setState({
        value: parseInt(finalNote),
      }),
      1500,
    );
  }

  componentDidUpdate() {
    const currentNote = this.state.value;
    let newNote = this.props.finalNote;
    if (isNaN(newNote)) {
      return (newNote = 0);
    }

    if (newNote !== currentNote) {
      setTimeout(
        this.setState({
          value: newNote,
        }),
        1500,
      );
    }
  }

  render() {
    const radius = 80;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.state.value / 100);
    const gradientStops = [
      {
        key: '0%',
        stopColor: color('dodgerblue')
          .darker(0.9)
          .toString(),
        stopOpacity: 1,
        offset: '0%',
      },
      {
        key: '50%',
        stopColor: color('dodgerblue'),
        stopOpacity: 0.6,
        offset: '50%',
      },
      {
        key: '100%',
        stopColor: color('deepskyblue')
          .brighter(0.5)
          .toString(),
        stopOpacity: 0.5,
        offset: '100%',
      },
    ];

    return (
      <div>
        <LiquidFillGauge
          style={{ margin: '0 auto' }}
          width={radius * 2}
          height={radius * 2}
          value={this.state.value}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 2;
            const valueStyle = {
              fontSize: textPixels,
            };
            const percentStyle = {
              fontSize: textPixels * 0.6,
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={1}
          waveAmplitude={3}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: fillColor,
          }}
          waveStyle={{
            fill: fillColor,
          }}
          textStyle={{
            fill: color('#444').toString(),
            fontFamily: Global.font.primary,
          }}
          waveTextStyle={{
            fill: color('#fff').toString(),
            fontFamily: Global.font.primary,
          }}
        />
        <div
          style={{
            margin: '20px auto',
            width: 120,
          }}
        />
      </div>
    );
  }
}

export default Gauge;
