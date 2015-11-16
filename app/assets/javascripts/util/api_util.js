var ApiUtil = window.ApiUtil = {

  fetchBenches: function (bounds) {
    var filterParams = FilterStore.all();
    var urlStr = 'api/benches';
    urlStr += '?bounds=' + JSON.stringify(filterParams.bounds);
    urlStr += "&min=" + filterParams.min + "&max=" + filterParams.max;
    if (filterParams.bounds) {
      $.ajax({
        url: urlStr,
        type: 'GET',
        data: 'json',
        success: function (data){
          ApiActions.receiveAll(data);
        }
      });
    }
  },

  fetchBench: function (id) {
    var urlStr = 'api/benches/' + id;
    $.ajax({
      url: urlStr,
      type: 'GET',
      data: 'json',
      success: function (data){
        ApiActions.receiveOne(data);
      }
    });
  },

  createBench: function (bench) {
    $.ajax({
      url: 'api/benches/',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(bench),
      success: function (data) {
        ApiActions.receiveOne(data);
      }
    });
  },

  fetchReviews: function (benchId) {
    $.ajax({
      url: 'api/benches/' + benchId + "/reviews",
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ReviewActions.receiveAll(data);
      }
    });
  },

  createReview: function (review, bench_id) {
    $.ajax({
      url: 'api/benches/' + bench_id + "/reviews",
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(review),
      success: function (data) {
        ReviewActions.receiveOne(data);
      }
    });
  }
};
