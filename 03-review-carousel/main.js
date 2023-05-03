const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let defaultReviewNum = 0;
const profileImg = document.querySelector(".profile-img");
const userName = document.querySelector(".user-name");
const userJob = document.querySelector(".user-job");
const reviewText = document.querySelector(".text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

function renderReview() {
  profileImg.src = reviews[defaultReviewNum].img;
  userName.textContent = reviews[defaultReviewNum].name;
  userJob.textContent = reviews[defaultReviewNum].job;
  reviewText.textContent = reviews[defaultReviewNum].text;
}

window.addEventListener("DOMContentLoaded", () => {
  renderReview();
});

prevBtn.addEventListener("click", () => {
  if (defaultReviewNum === 0) {
    defaultReviewNum = reviews.length - 1;
  } else {
    defaultReviewNum--;
  }
  renderReview();
});

nextBtn.addEventListener("click", () => {
  if (defaultReviewNum === reviews.length - 1) {
    defaultReviewNum = 0;
  } else {
    defaultReviewNum++;
  }
  renderReview();
});

randomBtn.addEventListener("click", () => {
  defaultReviewNum = Math.floor(Math.random() * reviews.length);
  renderReview();
});
