let menuList = document.getElementById('menu-list')
let starterButton = document.getElementById('starters')
let dessertsButton = document.getElementById('desserts')
let entreeButton = document.getElementById('entrees')
let fullButton = document.getElementById('fullMenu')

for(i = 0; i < dishes.length; i++){
    let item = dishes[i]

    let menuItem = `
    <li>
        <div class="dish">
            <div>
                <img src=${item.imageURL}></img>
            </div>
            <div class="text-container">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            </div>
            <div class="price">
                <p>$${item.price}</p>
            </div>
        </div>
    </li>

    `
    menuList.insertAdjacentHTML("beforeend",menuItem)
    
}

starterButton.addEventListener('click', function(){
    menuList.innerHTML = " ";
    // let menuList = document.getElementById('menu-list')
    for(i = 0; i < dishes.length; i++){
        let item = dishes[i]
        if(item.course == "Starters"){
            let menuItem = `
                <li>
                    <div class="dish">
                        <div>
                            <img src=${item.imageURL}></img>
                        </div>
                        <div class="text-container">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>
                        <div class="price">
                            <p>$${item.price}</p>
                        </div>
                    </div>
                </li>

                `
    menuList.insertAdjacentHTML("beforeend",menuItem)
        }
    }
})

dessertsButton.addEventListener('click', function(){
    menuList.innerHTML = " ";
    for(i = 0; i < dishes.length; i++){
        let item = dishes[i]
        if(item.course == "Desserts"){
            let menuItem = `
                <li>
                    <div class="dish">
                        <div>
                            <img src=${item.imageURL}></img>
                        </div>
                        <div class="text-container">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>
                        <div class="price">
                            <p>$${item.price}</p>
                        </div>
                    </div>
                </li>

               `
    menuList.insertAdjacentHTML("beforeend",menuItem)
        }
    }
})

entreeButton.addEventListener('click', function(){
    menuList.innerHTML = " ";
    for(i = 0; i < dishes.length; i++){
        let item = dishes[i]
        if(item.course == "Entrees"){
            let menuItem = `
                <li>
                    <div class="dish">
                        <div>
                            <img src=${item.imageURL}></img>
                        </div>
                        <div class="text-container">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>
                        <div class="price">
                            <p>$${item.price}</p>
                        </div>
                    </div>
                </li>

                `
    menuList.insertAdjacentHTML("beforeend",menuItem)
        }
    }
})

fullButton.addEventListener('click', function(){
    menuList.innerHTML = " ";
    for(i = 0; i < dishes.length; i++){
        let item = dishes[i]
        
            let menuItem = `
                <li>
                    <div class="dish">
                        <div>
                            <img src=${item.imageURL}></img>
                        </div>
                        <div class="text-container">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                        </div>
                        <div class="price">
                            <p>$${item.price}</p>
                        </div>
                    </div>
                </li>

                `
    menuList.insertAdjacentHTML("beforeend",menuItem)
        }
    
})