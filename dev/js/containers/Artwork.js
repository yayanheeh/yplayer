const React = require('react'),
      {connect} = require('react-redux'),
      Cover = require('../components/Cover');

class Artwork extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };

    this.coverOnLoad = this.coverOnLoad.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: this.props.src !== nextProps.src
    });
  }

  coverOnLoad() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <Cover src={this.props.src} loading={this.state.loading} coverOnLoad={this.coverOnLoad}/>
    );
  }

  static propTypes = {
    src: React.PropTypes.string.isRequired
  }
}

function mapStateToProps(state) {
  return {
    src: state.data.cover || 'https://img.icons8.com/color/200/000000/next.png'
  };
}

module.exports = connect(mapStateToProps)(Artwork);
