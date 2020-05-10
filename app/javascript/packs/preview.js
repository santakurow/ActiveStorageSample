$(document).on("turbolinks:load", function() {

  const readURL = (event) => {
    let files = event.target.files;
    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        // console.log(event.target.files[i]);
        if (!files[i].type.match("image")) continue;
        const reader = new FileReader();
        reader.onload = function (e) {
          let imageFile = e.target.result
          if (files.length === 1) {
            console.log("1");
            $(".preview").html(`<img src="${imageFile}" id="first-image" width="100" heigth="100">`);
          }
          else {
            console.log(i)
            $("#first-image").remove();
            $(".preview").append(`<img src="${imageFile}" id="${i}" width="100" heigth="100">`);
          }
        }
        // $("#avatar_preview").attr("src", e.target.result);
        reader.readAsDataURL(files[i]);
      }

    }
  }

  $("#user_avatars").on("change", function (e) {
    readURL(e)
  })
})