$(document).on("turbolinks:load", function() {

  const readURL = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // console.log(e.target.result);
        $(".preview").append(`<img src="${e.target.result}" width="100" heigth="100">`);
        // $("#avatar_preview").attr("src", e.target.result);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  $("#user_avatars").on("change", function (e) {
    readURL(e)
  })
})