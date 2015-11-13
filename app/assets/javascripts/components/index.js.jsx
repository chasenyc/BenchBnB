var Index = React.createClass({

  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._change);
  },

  _change: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {

    return (
      <div>
        <ul>
          {
            this.state.benches.map(function (bench) {
              return <li key={bench.description}>{bench.description}</li>;
            })
          }
        </ul>
      </div>
    );
  }
});
