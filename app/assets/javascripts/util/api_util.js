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

  createBench: function (bench) {
    $.ajax({
      url: 'api/benches/',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(bench),
      success: function (data) {
        console.log('holy cow');
      }
    });
  }
};
