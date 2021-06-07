class Item {
    #name;
    #date;
    #id
    constructor(newName, newDate, newId){
        this.#name = newName;
        this.#date = newDate;
        this.#id = newId
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

    get id(){
        return this.#id;
    }

    set id(newId){
        this.#id = newId;
    }
}

moment.locale('ru');
let submitBtn = document.getElementById("submitBtn");
let clearBtn = document.getElementById("clearBtn");
let deleteCheckedItemsBtn = document.getElementById('deleteCheckedItemsBtn')

let itemsArray = [];
let deletedItemsIdsArray = []
let currentId = 1
let itemsBlock = $("#itemsList");

function showItems(){
    itemsBlock.empty();
    for(let i = 0; i < itemsArray.length; i++){
        itemsBlock.append(
            `
                <div class="item__item">
                    <div class="item__name">
                    <input type="checkbox" onclick="itemCheck(${itemsArray[i].id})">
                        ${itemsArray[i].name} | ${itemsArray[i].date}
                    </div>
                    <div class="item__actions">
                        <div class="editBtn">e</div>
                        <div class="deleteBtn" onclick="deleteItem(${itemsArray[i].id})">d</div>
                    </div>
                </div>
            `
        );
    }
}

function deleteItem(itemId) {
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].id === itemId) {
            itemsArray.splice(i, 1)
        }
        
    }

    showItems()
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

    currentId++

    showItems();
});

clearBtn.addEventListener("click", function(){
    clearArray();
    showItems();
});

deleteCheckedItemsBtn.addEventListener('click', function (){
    if (deletedItemsIdsArray.length === 0) {
        alert('Отметьте хотя бы 1 товар..')
    }else{
        for (let i = 0; i < deletedItemsIdsArray.length; i++) {
            for (let k = 0; k < itemsArray.length; k++) {
                if (deletedItemsIdsArray[i] === itemsArray[k].id) {
                    itemsArray.splice(k, 1)
                }
                
            }
            
        }
    }
    showItems()
})