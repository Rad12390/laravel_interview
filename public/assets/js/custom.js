 $(document).ready(function(){

    $("#form").on('submit', function(event){
        event.preventDefault();
        var url = $(this).attr('data-action');
        var currenturl = $("#currentUrl").val();
        
        if (currenturl.startsWith('http://') || currenturl.startsWith('https://') )
        {
           $.ajax({
                        url: url,
                        method: 'post',
                        data: {
                            currenturl:currenturl,
                           },
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success:function(response)
                        {
                          var html = '';
                              html = 'Url: ' + response;
                              $(".shortner").append(html);
                        },

                        error: function(response) {

                        }
                    });
             } else {
            alert("Please enter the valid Url.");
        }       

            });
      

      });
