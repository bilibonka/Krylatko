const images = document.querySelectorAll("img");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    if (
      myImgSingle.target.src == "https://bilibonka.github.io/Krylatko/" ||
      myImgSingle.target.src == "https://bilibonka.github.io/Krylatko/index.html" ||
      myImgSingle.target.src == "https://bilibonka.github.io/Krylatko/#"
    ) {
      if (myImgSingle.intersectionRatio) {
        loadImage(myImgSingle.target);
        switch (myImgSingle.target.src) {
          case "https://bilibonka.github.io/Krylatko/img/header_background2.jpg":
            myImgSingle.target.classList.add("indentFirstSection");
            break;
          case "https://bilibonka.github.io/Krylatko/img/sell_background2.jpg":
            myImgSingle.target.classList.add("indentDiscountBlock__image");
            break;
          case "https://bilibonka.github.io/Krylatko/img/armchairGazelle2.png":
            myImgSingle.target.classList.add(
              "indentSpecialOfferDiscount__background"
            );
            break;
          default:
            break;
        }
      }
    }
  });
}

function loadImage(image) {
  image.src = image.getAttribute("data");
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach((img) => {
  observer.observe(img);
});
