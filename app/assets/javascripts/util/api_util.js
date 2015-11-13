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
  }
};
