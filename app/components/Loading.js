import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  }
};

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };
  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };
  state = {
    text: this.props.text,
  };
  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = `${text}...`

    this.interval = window.setInterval(() => {
      this.setState((prevState) => {
        const newText = this.state.text === stopper ? text : `${prevState.text}.`
        return { text: newText }
      })
    }, speed)
  };
  componentWillUnmount() {
    window.clearInterval(this.interval);
  };

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  };
}

export default Loading;
