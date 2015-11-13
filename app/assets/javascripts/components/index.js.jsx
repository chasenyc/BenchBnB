var Index = React.createClass({

  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._change);
    ApiUtil.fetchBenches();
  },

  _change: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {

    return (
      <div>

      </div>
    );
  }
});
