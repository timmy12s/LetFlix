const nextButtonJS = document.querySelectorAll(".nextButton");
const movieListJS = document.querySelectorAll(".movieList");

nextButtonJS.forEach((nextButton, i) => {
  const imgNumber = movieListJS[i].querySelectorAll("img").length;
  let click = 0;
  nextButton.addEventListener("click", () => {
    click++;
    if (imgNumber - (10 + click)>= 0) {
      movieListJS[i].style.transform = `translateX(${
        movieListJS[i].computedStyleMap().get("transform")[0].x.value - 377
      }px)`;
    } else {
      movieListJS[i].style.transform = "translateX(0)";
      click = 0;
    }
  });
});
