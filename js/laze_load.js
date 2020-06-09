const images = document.querySelectorAll("img");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    if (
      myImgSingle.target.src == "http://dredok.mcdir.ru/" ||
      myImgSingle.target.src == "http://dredok.mcdir.ru/index.html" ||
      myImgSingle.target.src == "http://dredok.mcdir.ru/#"
    ) {
      if (myImgSingle.intersectionRatio) {
        loadImage(myImgSingle.target);
        switch (myImgSingle.target.src) {
          case "http://dredok.mcdir.ru/img/header_background2.jpg":
            myImgSingle.target.classList.add("indentFirstSection");
            break;
          case "http://dredok.mcdir.ru/img/sell_background2.jpg":
            myImgSingle.target.classList.add("indentDiscountBlock__image");
            break;
          case "http://dredok.mcdir.ru/img/armchairGazelle2.png":
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
