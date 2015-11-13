var ApiUtil = window.ApiUtil = {

  fetchBenches: function () {
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      data: 'json',
      success: function (data){
        ApiActions.receiveAll(data);
      }
    });
  }
};
