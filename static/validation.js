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






          $(function(){
              var form = $(".login-form");

              form.css({
                  opacity: 1,
                  "-webkit-transform": "scale(1)",
                  "transform": "scale(1)",
                  "-webkit-transition": ".5s",
                  "transition": ".5s"
              });
          });




    $("#removebook").click(function(){
          if(confirm('Desea eliminar estos libros   del Inventario ?'))
            {


              $("input:checkbox[name=id]:checked").each(function ()
                  {
                    var id=$(this).val();
                    $.post("/removebook",
                    {_id:id
                     },
                    function(data,status){});

                    $(this).closest('tr').remove();

                 });
          } });


        $("#allbook").click(function()
              {
                $("input:checkbox[name=id]").prop("checked",$('#allbook').is(':checked'));
              });

       $("button:button[name=updateBook]").click(function()
     {

              $("input:text[name=isbn]").val  ($(this).closest('tr').children('td:eq(1)').text());
              $("input:text[name=title]").val  ($(this).closest('tr').children('td:eq(2)').text());
              $("input:text[name=authors]").val  ($(this).closest('tr').children('td:eq(3)').text());
              $("select[name=category]").val  ($(this).closest('tr').children('td:eq(7)').text());
              $("input[name=stock_amount]").val  ($(this).closest('tr').children('td:eq(6)').text());
              $("input[name=loan_time]").val  ($(this).closest('tr').children('td:eq(5)').text());
    });



    $("#update").click(function()
   {

     $(function () {
        $('#exampleModal').modal('toggle');
     });

      $.post("/updateBook", {  isbn  :   $("input:text[name=isbn]").val () , title :    $("input:text[name=title]").val(),
                              authors : $("input:text[name=authors]").val() , category : $("input:text[name=category]").val(),
                             stock_amount : $("input[name=stock_amount]").val() ,loan_time : $("input[name=loan_time]").val(),
                             published_date :  $("input[name=published_date]").val() },
                              function(data,status){console.log("Data: " + data + "\nStatus: " + status);});
 }
  );






});














/*
isbn  :   $("input:text[name=isbn]").val () , title :    $("input:text[name=title]").val(),
                        authors : $("input:text[name=authors]").val() , category : $("input:text[name=category]").val(),
                       stock_amount : $("input[name=stock_amount]").val() ,loan_time $("input[name=loan_time]") ,
                       published_date :  $("input[name=published_date]").val()  */
