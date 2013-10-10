// var toString = function(){
//     console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
//     for(key in this){
//         if(key!='toString' && key!='isVegan' && key!='isGlutenFree' && key!='isCitrusFree' && key!='create' && key!='element'){
//             console.log(key,' : ',this[key])
//             if (this[key] instanceof Array){
//                 var items = []
//                 for(var i = 0; i < this[key].length; i++){
//                     items.push(this[key][i])                   
//                 }
//                 for(var i=0;i<items.length;i++){
//                     items[i].toString()
//                 }
//             }
//         }
//     }
// }

var create = function(){
    if (this.hasOwnProperty('isVegan') && theCustomer.checkPlate(this) === true){
        console.log(this)
        theRestaurant.element = theRestaurant.element.concat('<strong>')
    }
    for(key in this){
        if(key!='toString' && key!='isVegan' && key!='isGlutenFree' && key!='isCitrusFree' && key!='create' && key!='element'){
            if (!(this[key] instanceof Array)){
                if (key ==='name'){
                    theRestaurant.element = theRestaurant.element.concat("<p>{0}</p>".supplant([this[key]]))
                }
                else {
                    theRestaurant.element = theRestaurant.element.concat("<p>{0} : {1} </p>".supplant([key, this[key].toString()]))
                }
            }
            if (this[key] instanceof Array){
                theRestaurant.element = theRestaurant.element.concat("<p>{0}".supplant([key]))
                var items = []
                for(var i = 0; i < this[key].length; i++){
                    items.push(this[key][i])                   
                }
                for(var i=0;i<items.length;i++){
                    items[i].create()
                }
            }
        }
    }
    if (this.hasOwnProperty('isVegan') && theCustomer.checkPlate(this) === true){
        theRestaurant.element = theRestaurant.element.concat('</strong>')
    }
}

// parameters are of types string, integer, boolean, boolean, boolean
var FoodItem = function(name, calories,vegan,glutenfree,citrusfree){
    this[''] = '-------------------------'
    this.name = name
    this.calories = calories
    this.vegan = vegan
    this.glutenfree = glutenfree
    this.citrusfree = citrusfree
    this.toString = toString
    this.create = create
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//arguments: string, string, fooditem object
var Drink = function(name, description, price, items){
    this[''] = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='
    this.name = name
    this['='] = '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='
    this.descriptionn = description
    this.price = price
    this.items = items   
    this.toString = toString   
    this.create = create
    this.isVegan = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].Vegan === false){
                answer = false
            }
        }
        return answer
    }
    this.isGlutenFree = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].GlutenFree === false){
                answer = false
            }
        }
        return answer
    }
    this.isCitrusFree = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].CitrusFree === false){
                answer = false
            }
        }
        return answer
    }
}

//arguments: string, string, number, fooditem object
var Plate = function(name,description,price,items){
    this[''] = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='
    this.name = name
    this['='] = '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='
    this.description = description
    this.price = price
    this.items = items
    this.create = create
    this.toString = toString    
    this.isVegan = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].Vegan === false){
                answer = false
            }
        }
        return answer
    }
    this.isGlutenFree = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].GlutenFree === false){
                answer = false
            }
        }
        return answer
    }
    this.isCitrusFree = function(){
        var answer = true
        for (var i = 0; i < this.items.length; i++){
            if(this.items[i].CitrusFree === false){
                answer = false
            }
        }
        return answer
    }
}
//arguments: Plate object
var Order = function(plates){
    this.plates = plates
    this.create = create
    this.toString = toString
    this.calcPrice = function(){
        total = 0
        for (var i = 0; i < this.plates.length; i++){
            total += this.plates[i].price
        }
        return total
    }
}

//arguments: Plate object
var Menu = function(plates){
    this.plates = plates
    this.toString = toString
    this.create = create
}

//arguments: string, string, Menu object
var Restaurant = function(name,description,menu){
    this.name = name
    this.description = description
    this.menu = menu
    this.create = create
    this.toString = toString
    this.element = ''
}

//arguments: string
var Customer = function(dietaryPreference){
    this.dietaryPreference = dietaryPreference
    this.toString = toString
    this.checkPlate = function(plate){
        answer = true
        for (var i =0; i<plate.items.length; i++){
            if (plate.items[i][this.dietaryPreference] === false){
                answer = false
            }
        }
        return answer
    }
}



orange = new FoodItem('Orange',100,true,true,false)
pizza = new FoodItem('Pizza',1000,false,false,true)
everythingBagel = new FoodItem('Everything Bagel',10000000,false,false,false)//It has literally everything on it.
orangePizzaPlate = new Plate('Orange Pizza Plate', 'Fruity and greasy', '$dollarMoney', [orange, pizza])
rice = new FoodItem('rice',15,true,false,true)
beans = new FoodItem('beans',10, true, true,true)
tortilla = new FoodItem('tortilla', 40, true, false, true)
avocado = new FoodItem('avocado', 50, true, true, true)
lime = new FoodItem('lime', 45, true, true, false)
tequila = new FoodItem('tequila',150, true,true,true)
burritoPlate = new Plate('Burrito Plate', 'A tasty burrito!', 10.00, [rice, beans, tortilla])
guacamolePlate = new Plate('Guacamole Plate', 'Delicious guac', 8.00, [avocado, lime])
margarita = new Drink('Margarita', 'Buy three, get two free!', 2.00, [tequila, lime])
theMenu = new Menu([burritoPlate, guacamolePlate, margarita])
theRestaurant = new Restaurant("Dana's Diner", "Happy-hour starts at sunrise!", [theMenu])
theOrder = new Order([])
theCustomer = new Customer('citrusfree')

$(document).ready(function(){
    theRestaurant.create()
    $('body').append(theRestaurant.element)
    $(document).on('click','p',function(){
        for (var i = 0; i < theMenu.plates.length; i++){
            if (theMenu.plates[i].name === $(this).text()){
                if (confirm('Would you like to add this to your order?')){
                    console.log(theMenu.plates[i].name)

                    theOrder.plates.push(theMenu.plates[i])
                    $('.total').text(theOrder.calcPrice())
                    $('.order').append('<p>' + theMenu.plates[i].name + '</p>')
                }
            }
        }
    })
})



