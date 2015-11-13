var ApiUtil = window.ApiUtil = {

  fetchBenches: function (bounds) {
    $.ajax({
      url: 'api/benches?bounds=' + JSON.stringify(bounds),
      type: 'GET',
      data: 'json',
      success: function (data){
        ApiActions.receiveAll(data);
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
        console.log('holy cow');
      }
    });
  }
};
