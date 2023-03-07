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
    description: 'Lorem Ipsum  took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/modal-mobile.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 1,
    mobTitle: 'Data Dashboard Healthcare',
    deskTitle: 'Data Dashboard Healthcare',
    description: 'Lorem Ipsum printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder1.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 2,
    mobTitle: 'Website Protfolio',
    deskTitle: 'Website Protfolio ',
    description: 'Lorem Ipsum ok a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 3,
    mobTitle: 'Profesional Art Printing Data More',
    deskTitle: 'Profesional Art Printing Data More ',
    description: 'Lorem Ipsum  a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 4,
    mobTitle: 'Data Dashboard Healthcare',
    deskTitle: 'Data Dashboard Healthcare ',
    description: 'Lorem Ipsum  of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/background.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 5,
    mobTitle: 'Website Protfolio',
    deskTitle: 'Website Protfolio',
    description: 'Lorem Ipsum f type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },

  {
    id: 6,
    mobTitle: 'Data Dashboard Fully illustrted',
    deskTitle: 'Data Dashboard Fully illustrted ',
    description: 'Lorem Ipsum galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },
  {
    id: 7,
    mobTitle: 'Website Protfolio',
    deskTitle: 'Website Protfolio',
    description: 'Lorem Ipsum  of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder2.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
  },
  {
    id: 8,
    mobTitle: 'Data Dashboard Fully illustrted',
    deskTitle: 'Data Dashboard Fully illustrted ',
    description: 'Lorem Ipsum  took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['html', 'bootstrap', 'Ruby'],
    featuredImages: './Images/placeholder3.png',
    live: 'https://amazinggracee.github.io/Portfolio1/',
    source: 'https://github.com/Amazinggracee/Portfolio1',
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
        <li><button>${projects[index].technologies[2]}</button></li>
        </ul>
      </div>
      <div class="modalDes">
        <img class="modImg" src="${projects[index].featuredImages}" alt="Popup" />
        <div id="btnContact">
          <p class="pDesc">${projects[index].description}</p>

          <div class="contactBtn">
            <a href="${projects[index].live}"
              target="_blank">><button type="button" class="btnContact">
                Seem Live <img src="images/Icon.png" alt="" / </button
            ></a>
            <a href="${projects[index].source}"
             target="_blank"> ><button type="button" class="btnContact">
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
        <li><button>${projects[index].technologies[2]}</button></li>
        </ul>
      </div>
      <div class="modalDes">
        <img class="modImg" src="${projects[index].featuredImages}" alt="Popup" />
        <div id="btnContact">
          <p class="pDesc">${projects[index].description}</p>

          <div class="contactBtn">
            <a href="${projects[index].live}"
              target="_blank"><button type="button" class="btnContact">
                Seem Live <img src="images/Icon.png" alt="" /></button
            ></a>
            <a href="${projects[index].source}"
              target="_blank"><button type="button" class="btnContact">
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