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

for (i=0; i<=dipendenti.length; i++){
    console.log(dipendenti[i]);
    let nome = document.querySelectorAll('.nome')
    let ruolo = document.querySelectorAll('.ruolo')
    let imagex = document.querySelectorAll('.imagex')

    // let div = document.createElement('div');
    for( let key in dipendenti[i]){
        console.log(dipendenti[i][key]);
        nome[i].innerHTML = dipendenti[i]['nome'] 
        ruolo[i].innerHTML = dipendenti[i]['ruolo'] 
        imagex[i].innerHTML = '<img src=".//img/' + dipendenti[i]['image'] + '" alt="Immagine dipendente">'
        
        // + dipendenti[i]['ruolo'] + '<img src=".//img/' + dipendenti[i]['image'] + '" alt="Immagine dipendente">'
        // list.appendChild(div)
    }

}