class Item {
    #name;
    #date;

    constructor(newName, newDate){
        this.#name = newName;
        this.#date = newDate;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    get date(){
        return this.#date;
    }

    set date(newDate){
        this.#date = newDate;
    }
}

moment.locale('ru');
let submitBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");

let itemsArray = [];
let itemsBlock = $("#itemsList");

function showItems(){
    itemsBlock.empty();
    for(let i = 0; i < itemsArray.length; i++){
        itemsBlock.append(
            `
                <div class="item__item">
                    <div class="item__name">
                        ${itemsArray[i].name} | ${itemsArray[i].date}
                    </div>
                    <div class="item__actions">
                        <div class="editBtn">e</div>
                        <div class="deleteBtn">d</div>
                    </div>
                </div>
            `
        );
    }
}

function clearArray(){
    itemsArray = [];
}

submitBtn.addEventListener("click", function(){
    let currentDate = moment().calendar();
    let nameInput = document.getElementById("nameInput");
    let itemName = nameInput.value;

    let item = new Item(itemName, currentDate);

    itemsArray.push(item);

    showItems();
});

clearBtn.addEventListener("click", function(){
    clearArray();
    showItems();
});