var Index = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function () {
    return {benches: BenchStore.all(), currentBench: 0};
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._change);
  },

  _change: function () {
    this.setState({
      benches: BenchStore.all()
    });
  },

  handleMouseOver: function (e) {
    ListActions.mouseOver(e.currentTarget.id);
  },

  handleMouseOut: function (e) {
    ListActions.mouseOver(-1);
  },

  handleClick: function (e) {
    debugger;
    this.history.pushState(null, "/bench/" + e.currentTarget.id);
  },

  render: function () {

    return (
      <div className="list">
        <ul>
          {
            this.state.benches.map(function (bench) {
              return <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick} key={bench.description} id={bench.id}><img src={bench.image_url} className='thumb'/>{bench.id}: {bench.description}</li>;
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});
