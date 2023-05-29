let petsCollection = [
    {
        "name": "Jennifer",
        "img": "assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": [
            "none"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Sophia",
        "img": "assets/pets-katrine1.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": [
            "parvovirus"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Woody",
        "img": "assets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": [
            "adenovirus",
            "distemper"
        ],
        "diseases": [
            "right back leg mobility reduced"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Scarlett",
        "img": "assets/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": [
            "parainfluenza"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Katrine",
        "img": "assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": [
            "panleukopenia"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Timmy",
        "img": "assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": [
            "calicivirus",
            "viral rhinotracheitis"
        ],
        "diseases": [
            "kidney stones"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Freddie",
        "img": "assets/pets-katrine2.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": [
            "rabies"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Charly",
        "img": "assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": [
            "bordetella bronchiseptica",
            "leptospirosis"
        ],
        "diseases": [
            "deafness",
            "blindness"
        ],
        "parasites": [
            "lice",
            "fleas"
        ]
    }
]


let bg = document.querySelector(`#bg`);
let popup = document.querySelector(`#popup`);
let card = document.querySelector(`.card`);
let close_bt = document.querySelector(`#close-bt`);
let title = document.querySelector(`#title`);


// header ---------------------------------------


const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const headerLink = document.querySelectorAll(".header__nav-link");
const body = document.body;


function togleBurger() {
    menu.classList.toggle("active");
    headerNav.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("fixed");
}

menu.addEventListener("click", togleBurger);

headerLink.forEach((item) => {
    item.addEventListener("click", togleBurger);
});
// header ---------------------------------------

//-------------slider-------------------//



let slider = document.querySelector(".friends__slider");
let previousButton = '';
let sliderItemsCount = 0;
let currentArrayIndex = [];
let previousArrayIndex = [];
const maxSliderItemsCount = 3;
let arrayIndex = new Array(petsCollection.length)
    .fill(0)
    .map((v, i) => i)
    .sort(() => 0.5 - Math.random());
// console.log(arrayIndex);

window.addEventListener("DOMContentLoaded", () => {
    fillSliderItems();
});

window.addEventListener('resize', () => {
    fillSliderItems();
});

let buttonRight = document.querySelector(".right");
let buttonLeft = document.querySelector(".left");



buttonRight.addEventListener("click", () => {

    if (previousButton !== 'left') {

        previousArrayIndex = arrayIndex.slice();
        genRandom();
    } else {
        [arrayIndex, previousArrayIndex] = [previousArrayIndex, arrayIndex];
    }
    currentArrayIndex = arrayIndex.slice(0, maxSliderItemsCount);
    previousButton = 'right';
    let petsSlider = document.querySelector('.friends__slider');
    petsSlider.style.transitionProperty = 'transform';
    let translateValue = 0;
    if (1180 < document.documentElement.clientWidth) {
        translateValue = -1080;
    } else if (1181 > document.documentElement.clientWidth &&
        document.documentElement.clientWidth > 712) {
        translateValue = -720;
    } else if (713 > document.documentElement.clientWidth) {
        translateValue = -360;
    }

    for (let i = 0; i < sliderItemsCount; i++) {
        petsSlider.insertAdjacentHTML('beforeend', сreateSliderItem(currentArrayIndex[i]));
    }

    const transitionListener = (event) => {
        if (event.propertyName !== 'transform')
            return;
        petsSlider.style.transitionProperty = 'none';
        petsSlider.removeEventListener('transitionend', transitionListener);
        for (let i = 0; i < sliderItemsCount; i++) {
            petsSlider.querySelector('.card').remove();
        }
        petsSlider.style.transform = 'translateX(0px)';
    };

    petsSlider.addEventListener('transitionend', transitionListener);
    petsSlider.style.transform = `translateX(${translateValue + "px)"}`;
});





buttonLeft.addEventListener("click", () => {

    if (previousButton !== 'right') {

        previousArrayIndex = arrayIndex.slice();
        genRandom();
    } else {
        [arrayIndex, previousArrayIndex] = [previousArrayIndex, arrayIndex];
    }
    currentArrayIndex = arrayIndex.slice(0, maxSliderItemsCount);
    previousButton = 'left';
    let petsSlider = document.querySelector('.friends__slider');
    let translateValue = 0;
    if (1180 < document.documentElement.clientWidth) {
        translateValue = -1080;
    } else if (1181 > document.documentElement.clientWidth &&
        document.documentElement.clientWidth > 712) {
        translateValue = -720;
    } else if (713 > document.documentElement.clientWidth) {
        translateValue = -360;
    }

    petsSlider.style.transitionProperty = 'none';
    for (let i = sliderItemsCount - 1; i >= 0; i--) {
        petsSlider.insertAdjacentHTML('afterbegin', сreateSliderItem(currentArrayIndex[i]));
    }
    petsSlider.style.transform = `translateX(${translateValue + "px)"}`;

    const transitionListener = (event) => {
        if (event.propertyName !== 'transform')
            return;
        petsSlider.style.transitionProperty = 'none';
        petsSlider.removeEventListener('transitionend', transitionListener);
        const items = petsSlider.querySelectorAll('.card');
        for (let i = sliderItemsCount; i < sliderItemsCount * 2; i++) {
            items[i].remove();
        }
    };

    setTimeout(() => {
        petsSlider.addEventListener('transitionend', transitionListener);
        petsSlider.style.transitionProperty = 'transform';
        petsSlider.style.transform = 'translateX(0px)';
    }, 0);
});


function genRandom() {

    arrayIndex.reverse();

    arrayIndex = [...arrayIndex.slice(0, sliderItemsCount), ...arrayIndex.slice(sliderItemsCount).sort().sort(() => 0.5 - Math.random())];
}


function сreateSliderItem(i) {
    return `<div class="card card-Katrine">

    <img class="card-item pets-kartine" alt="all animals" src="${petsCollection[i].img}">
    <div class="card-item Name"> ${petsCollection[i].name}</div>
    <div class="card-item container-bt"><button class="Button-Secondary"><span
                class="text-Button">Learn
                more</span></button></div>
</div>`;
}
function RenderPopup(i) {
    return `<div class="popup-content">
    <img class="popup-img" src="${petsCollection[i].img}">
    <div class="popup-txt">
        <div class="title-and-pord">
            <div id="title" class="popup-title">${petsCollection[i].name}</div>
            <div class="popap-porod">${petsCollection[i].type} - ${petsCollection[i].breed}</div>
        </div>
        <div class="popup-info">${petsCollection[i].description}</div>
        <div class="popup-li">
            <ul>
                <li><span><b>Age:</b> ${petsCollection[i].age}</span></li>
                <li><span><b>Inoculations:</b>${petsCollection[i].inoculations}</span></li>
                <li><span><b>Diseases:</b>${petsCollection[i].diseases}</span></li>
                <li><span><b>Parasites:</b>${petsCollection[i].parasites}</span></li>
            </ul>
        </div>
    </div>
</div>`

}

function fillSliderItems() {
    document.querySelector('.friends__slider').innerHTML = '';
    sliderItemsCount = 3; // 1180
    if (
        1181 > document.documentElement.clientWidth &&
        document.documentElement.clientWidth > 712
    ) {
        sliderItemsCount = 2;
    } else if (713 > document.documentElement.clientWidth) {
        sliderItemsCount = 1;
    }
    for (let i = 0; i < sliderItemsCount; i++) {
        slider.insertAdjacentHTML(
            'beforeend',
            сreateSliderItem(arrayIndex[i])
        );
    }
};
//-------------slider-------------------//




card.addEventListener(`click`, RenderPopup(i))

card.addEventListener(`click`, function () {
    overlay.classList.toggle("active");
    body.classList.toggle("fixed");
    popup.classList.remove(`d-none`)
})

close_bt.addEventListener(`click`, function () {
    popup.classList.add(`d-none`)
    bg.classList.add(`d-none`)
})

bg.addEventListener(`click`, function () {
    popup.classList.add(`d-none`)
    bg.classList.add(`d-none`)
})







// json.forEach(function (element) {




//     let Name = element.name;
//     let Age = element.Age;
//     let img = element.img;
//     let type = element.type;
//     let breed = element.breed;
//     let description = element.description;
//     let inoculations = element.inoculations;
//     let diseases = element.diseases;
//     let parasites = element.parasites;


// });

