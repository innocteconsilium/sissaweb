
  
  $(document).ready(function() {
    // Detect when form-control inputs are not empty
    $(".sissa-form .form-control").on("input", function() {
        if ($(this).val()) {
          $(this).addClass("hasValue");
        } else {
          $(this).removeClass("hasValue");
        }
      });
});

