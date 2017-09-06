const React = require('react');
const PropTypes = require('prop-types');

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = `${text}...`

    this.interval = window.setInterval(() => {
      this.setState((prevState) => {
        const newText = this.state.text === stopper ? text : `${prevState.text}.`
        return { text: newText }
      })
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
}

module.exports = Loading
