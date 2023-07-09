const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "images/air.png",
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "images/jordan.png",
      },
      {
        code: "green",
        img: "images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "images/blazer.png",
      },
      {
        code: "green",
        img: "images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "images/crater.png",
      },
      {
        code: "lightgray",
        img: "images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/hippie.png",
      },
      {
        code: "black",
        img: "images/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const wrapper = document.querySelector(".sliderWrapper");

const links = document.querySelectorAll(".link");

const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productDesc = document.querySelector(".productDesc");
const productColors = document.querySelectorAll(".color");
const productSizes = document.querySelectorAll(".size");

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

links.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosenProduct = products[index];

    productImg.src = chosenProduct.colors[0].img;
    productTitle.textContent = chosenProduct.title;
    productPrice.textContent = `$ ${chosenProduct.price}`;

    productColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

function setActive(e) {
  const parent = e.target.parentNode;
  const active = parent.querySelector(".active");

  if (active) {
    active.classList.toggle("active");
  }

  e.target.classList.add("active");
}

links.forEach((item) => {
  item.addEventListener("click", setActive);
});

productColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = chosenProduct.colors[index].img;
  });
});

productSizes.forEach((size) => {
  size.addEventListener("click", () => {
    productSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
