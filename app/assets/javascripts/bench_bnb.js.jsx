(function () {
  $(document).ready(function () {
    var root = document.getElementById('content');
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

    var App = React.createClass({
      render: function(){
        return (
            <div>
              <header><h1>Bench BnB</h1></header>
              <p>
                <h3>The best place to find a bench™</h3>
              </p>
              {this.props.children}
            </div>
        );
      }
    });

    var routes = ([
        <Route key={1} path="/" component={App} location={history}>
          <IndexRoute component={Search}/>
        </Route>,
        <Route key={2} path="/new" component={BenchForm}>
        </Route>,
        <Route key={3} path="/bench/:id" component={Show}>
          <IndexRoute component={ReviewForm} />
        </Route>
    ]);

    React.render(<Router>{routes}</Router>, root);
  });
})();
