let dipendenti = [
    {
        'nome' : 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg',

    },
    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg',

    },
    {
        'nome': 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg',

    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },   
]

for (i=0; i<dipendenti.length; i++){
    console.log(dipendenti[i]);
    let completo = document.getElementById('tutto')
    let div = document.createElement('div')
    completo.appendChild(div);
    div.classList.add('col-4')
    div.innerHTML = `<div>
      <div class="imagex">
      '<img src="./img/${dipendenti[i].image}" alt="Immagine dipendente">'</div>
      <div class="card-body">
        <h5 class="card-title nome text-center ">${dipendenti[i].nome}</h5>
        <p class="card-text text-center ruolo">${dipendenti[i].ruolo}</p>
        </div>
      </div>`}