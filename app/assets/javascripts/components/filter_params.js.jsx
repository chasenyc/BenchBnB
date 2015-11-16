var FilterParams = React.createClass ({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {min: 0, max: 5};
  },

  changeFilter: function (e) {
    var id = e.target.dataset.filter;
    if (id === "min") {
      FilterActions.changeMin(parseInt(e.target.value));
    }
    else {
      FilterActions.changeMax(parseInt(e.target.value));
    }
  },

  render: function () {

    return (
      <div className='filter-seating'>
        <form onChange={this.changeFilter} className='filter-form'>
          <div>
            <label>Seating Minimum:
              <select type="text" data-filter="min" >>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </label>
          </div>
          <div>
            <label>Seating Maximum:
              <select type="text" data-filter="max" >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5} defaultValue={true}>5</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
});
