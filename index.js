const images_sec_18 = document.getElementsByClassName("e_relation_suggest_one_images_sec_18");
const selectedImage = document.getElementById("e_relation_suggest_one_selectedImage");
images_sec_18[2].classList.add("active");
function e_relation_suggest_one_activeInactiveImage(index) {
  switch (index) {
    case 0:
      selectedImage.style.backgroundImage = "url('./assets/menANDwoman.png')";
      break;
    case 1:
      selectedImage.style.backgroundImage = "url('./assets/MMMTIC.png')";
      break;
    case 2:
      selectedImage.style.backgroundImage = "url('./assets/MMP12.png')";
      break;
    default:
      break;
  }

  for (let i = 0; i < images_sec_18.length; i++) {
    if (i === index) {
      images_sec_18[i].classList.add("active");
    } else {
      images_sec_18[i].classList.remove("active");
    }
  }
}
