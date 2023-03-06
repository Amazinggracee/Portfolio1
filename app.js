const menu = document.querySelector('.menu-list');
const hamburger = document.querySelector('.btn-hamburger');
const closeIcon = document.querySelector('.closeIcon');
const burgerIcon = document.querySelector('.burgerIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    burgerIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    burgerIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

const projects = [
  {
    id: 0,
    mobTitle: 'Multi Post Stories',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'I shall sit here on the door-step beside my friend Paul. He is an idle fellow with folded hands. He laughs when I upbraid him, and bids me, with a motion, hold my peace.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/modal-mobile.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 1,
    mobTitle: 'Data Dashboard Healthcare',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'He is listening to a thrush song that comes from the blur of yonder apple-tree. He tells me the thrush is singing a complaint. She wants her mate that was with her last blossom-time and builded a nest with her.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder1.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 2,
    mobTitle: 'Website Protfolio',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'She will have no other mate. She will call for him till she hears the notes of her beloved-ones song coming swiftly towards her across forest and field.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 3,
    mobTitle: 'Create a Function',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'Paul is a strange fellow. He gazed idly at a billowy white cloud that rolls lazily over and over along the edge of the blue sky.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 4,
    mobTitle: 'Join 5 Million easy steps',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'He turns away from me and the words with which I would instruct him, to drink deep the scent of the clover-field and the thick perfume from the rose-hedge.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/background.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 5,
    mobTitle: 'Easy to follow',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'I am tired. At the end of these years I am very tired. I have been studying in books the languages of the living and those we call dead.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },

  {
    id: 6,
    mobTitle: 'Data Dashboard Fully illustrted',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'Early in the fresh morning I have studied in books, and throughout the day when the sun was shining',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },
  {
    id: 7,
    mobTitle: 'Website Protfolio',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'She will have no other mate. She will call for him till she hears the notes of her beloved-ones song coming swiftly towards her across forest and field.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },
  {
    id: 8,
    mobTitle: 'Data Dashboard Fully illustrted',
    deskTitle: 'Keeping track of hundreds of components website ',
    description: 'Early in the fresh morning I have studied in books, and throughout the day when the sun was shining',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://github.com/Amazinggracee/Portfolio/',
    source: '',
  },
];

const allElement = document.querySelector('#all-element');
const showBtn = document.querySelectorAll('.project1');
const modalPop = document.querySelector('#modalPop');
showBtn.forEach((seeBtn, index) => {
  seeBtn.addEventListener('click', () => {
    modalPop.style.display = 'flex';
    allElement.classList.add('blur');
    modalPop.innerHTML = `<div class="modalHeader">
        <h2>
          <span class="pTitle">${projects[index].mobTitle}</span>
          <span class="dTitle"> ${projects[index].deskTitle}</span>
          <i class="closeB closeIcon material-icons" id="close-Btn">close</i>
        </h2>
        <ul class="modalTech">
        <li><button>${projects[index].technologies[0]}</button></li>
        <li><button>${projects[index].technologies[1]}</button></li>
        <li><button>${projects[index].technologies[3]}</button></li>
        </ul>
      </div>
      <div class="modalDes">
        <img class="modImg" src="${projects[index].featuredImages}" alt="Popup" />
        <div id="btnContact">
          <p class="pDesc">${projects[index].description}</p>

          <div class="contactBtn">
            <a href="${projects[index].live}"
              ><button type="button" class="btnContact">
                Seem Live <img src="images/Icon.png" alt="" /></button
            ></a>
            <a href="${projects[index].source}"
              ><button type="button" class="btnContact">
                See Source <img src="images/Icon -GitHub.png" alt="" /></button
            ></a>
          </div>
        </div>
      </div>
    `;
  });
});

document.body.appendChild(modalPop);

modalPop.addEventListener('click', (e) => {
  if (e.target.id === 'close-Btn') {
    modalPop.style.display = 'none';
    allElement.classList.remove('blur');
  }
});

const cards = document.querySelector('.allProjects');
function createCards() {
  const code = `
  <div id="mobProjects">
<div class="projectM projectD hoverdesk">
          <div class="invisc">
            <h3>Profesional Art Printing Data</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover">See Project</button>
        </div>


        <div class="projectM projectD1 hoverdesk" id="projectD1">
          <div class="hide-text">
            <h3 class="mobH">Profesional Art Printing Data</h3>
            <h3 class="desH">Data Dashboard Healthcare</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover" id="prohover1">See Project</button>
        </div>


        <div class="projectM projectD2 hoverdesk" id="projectD2">
          <div class="hide-text">
            <h3 class="mobH">Profesional Art Printing Data</h3>
            <h3 class="desH">Data Dashboard Healthcare</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover" id="prohover2">See Project</button>
        </div>


        <div class="projectM projectD3 hoverdesk" id="projectD3">
          <div class="hide-text">
            <h3 class="mobH">Profesional Art Printing Data</h3>
          <h3 class="desH">Data Dashboard Healthcare</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover" id="prohover3">See Project</button>
        </div>


        <div class="projectM projectD1 hoverdesk" id="projectD4">
          <div class="hide-text">
          <h3 class="mobH">Profesional Art Printing Data</h3>
          <h3 class="desH">Data Dashboard Healthcare</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover" id="prohover4">See Project</button>
        </div>


        <div class="projectM projectD2 hoverdesk" id="projectD5">
          <div class="hide-text">
            <h3 class="mobH">Profesional Art Printing Data</h3>
            <h3 class="desH">Data Dashboard Healthcare</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard
            </p>
            <ul class="techUse">
              <li>css</li>
              <li>html</li>
              <li>bootstrap</li>
            </ul>
          </div>
          <button type="button" class="project1 prohover" id="prohover5">See Project</button>
        </div>
      </div >
      `;
  cards.innerHTML += code;
}

createCards();

document.querySelectorAll('.prohover').forEach((el, index) => {
  el.addEventListener('click', () => {
    modalPop.style.display = 'flex';
    allElement.classList.add('blur');
    modalPop.innerHTML = `<div class="modalHeader">
        <h2>
          <span class="pTitle">${projects[index].mobTitle}</span>
          <span class="dTitle"> ${projects[index].deskTitle}</span>
          <i class="closeB closeIcon material-icons" id="close-Btn">close</i>
        </h2>
        <ul class="modalTech">
        <li><button>${projects[index].technologies[0]}</button></li>
        <li><button>${projects[index].technologies[1]}</button></li>
        <li><button>${projects[index].technologies[3]}</button></li>
        </ul>
      </div>
      <div class="modalDes">
        <img class="modImg" src="${projects[index].featuredImages}" alt="Popup" />
        <div id="btnContact">
          <p class="pDesc">${projects[index].description}</p>

          <div class="contactBtn">
            <a href="${projects[index].live}"
              ><button type="button" class="btnContact">
                Seem Live <img src="images/Icon.png" alt="" /></button
            ></a>
            <a href="${projects[index].source}"
              ><button type="button" class="btnContact">
                See Source <img src="images/Icon -GitHub.png" alt="" /></button
            ></a>
          </div>
        </div>
      </div>
    `;
  });
});

modalPop.addEventListener('click', (e) => {
  if (e.target.id === 'close-Btn') {
    modalPop.style.display = 'none';
    allElement.classList.remove('blur');
  }
});