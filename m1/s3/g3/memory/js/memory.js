let icone = ['😺','💥','😻','🙉','🐷','🐖', '🐧','🐸','🐉','🐛','🐜','🐝'];

//aggiorna l'array icone in modo che contenga un doppione per ogni icona
icone = icone.concat(icone);

const memory = document.getElementById('memory');


function shuffle(array){
    
    let newArray = [];
    let n = array.length;
    for(let i = 0; i < n; i++){
        let rand = Math.floor(Math.random() * array.length);
        newArray.push(array[rand]);
        array.splice(rand, 1);
    }
    
    return newArray;
}

function start(){
    
    //mescolo icone
    icone = shuffle(icone)

    /*
    <div class="card">
        <div class="icona">😺</div>
    </div>
    */

    icone.forEach(el => {

        //creo gli elementi
        let card = document.createElement('div');
        let icona = document.createElement('div');

        //assegnoo le classi
        card.classList.add('card');
        icona.classList.add('icona');

        icona.textContent = el;

        card.addEventListener('click',()=>{
            icona.classList.add('selected');
        })

        card.append(icona);
        memory.append(card)

    })

}

start();

