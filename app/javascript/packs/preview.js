$(document).on("turbolinks:load", function() {

  const readPreview = (event) => {
    let files = event.target.files;
    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        // console.log(event.target.files[i]);
        if (!files[i].type.match("image")) {
          alert("画像を選択してください。");
          continue;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
          let imageFile = e.target.result
          if (files.length === 1) {
            console.log("1");
            $(".preview").html(`<img src="${imageFile}" id="select_once_image" width="100" heigth="100">`);
          }
          else {
            console.log(i)
            $("#select_once_image").remove();
            $(".preview").append(`<img src="${imageFile}" id="${i}" width="100" heigth="100">`);
          }
        }
        // $("#avatar_preview").attr("src", e.target.result);
        reader.readAsDataURL(files[i]);
      }

    }
  }

  $("#user_avatars").on("change", function (e) {
    readPreview(e)
  })
})