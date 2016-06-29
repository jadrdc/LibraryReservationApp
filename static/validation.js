$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
});


$(document).ready(function(){


    $("#removebook").click(function()
    {if(confirm('Desea eliminar este libro del almacen ?'))
   {  var id=$('#flag').val();
      $.post("/removebook",
      {_id:id
        },
      function(data,status){
          console.log("Data: " + data + "\nStatus: " + status);
      });}});

      $("#updateBook").click(function()
      {       $("input[name=isbn]").val($("#isbn").text());
               $("input[name=title]").val($("#title").text());
               $("input[name=authors]").val($("#authors").text());
               $("input[name=published_date]").val($("#published_date").text());
               $("input[name=category]").val($("#category").text());
               $("input[name=stock_amount]").val($("#stock_amount").text());
               $("input[name=loan_time]").val($("#loan_time").text());
      });
      $("#update").click(function()
      {




      });









});
