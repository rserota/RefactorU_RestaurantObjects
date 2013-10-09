var toString = function(){
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    for(key in this){
        if(key!='toString' && key!='isVegan' && key!='isGlutenFree' && key!='isCitrusFree'){
            console.log(key,' : ',this[key])
            if (this[key] instanceof Array){
                var items = []
                for(var i = 0; i < this[key].length; i++){
                    items.push(this[key][i])                   
                }
                for(var i=0;i<items.length;i++){
                    items[i].toString()
                }
            }
        }
    }
}

// parameters are of types string, integer, boolean, boolean, boolean
var FoodItem = function(name, calories,Vegan,GlutenFree,CitrusFree){
    this.name = name
    this.calories = calories
    this.Vegan = Vegan
    this.GlutenFree = GlutenFree
    this.CitrusFree = CitrusFree
    this.toString = toString
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//arguments: string, string, FoodItem object
var Drink = function(name, description, items){
    this.name = name
    this.descriptionn = description
    this.items = items   
    this.toString = toString
}

//arguments: string, string, number, FoodItem object
var Plate = function(name,description,price,items){
    this.name = name
    this.description = description
    this.price = price
    this.items = items
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
    }}

//arguments: Plate object
var Order = function(plates){
    this.plates = plates
    this.toString = toString
}

//arguments: Plate object
var Menu = function(plates){
    this.plates = plates
    this.toString = toString
}

//arguments: string, string, Menu object
var Restaurant = function(name,description,menu){
    this.name = name
    this.description = description
    this.menu = menu
    this.toString = toString
}

//arguments: string
var Customer = function(dietaryPreference){
    this.dietaryPreference = dietaryPreference
    this.toString = toString
}





orange = new FoodItem('Orange',100,true,true,false)

pizza = new FoodItem('Pizza',1000,false,false,true)

everythingBagel = new FoodItem('Everything Bagel',10000000,false,false,false)//It has literally everything on it.

orangePizzaPlate = new Plate('Orange Pizza Plate', 'Fruity and greasy', '$dollarMoney', [orange, pizza])

// orangePizzaPlate.toString()

rice = new FoodItem('rice',15,true,false,true)
beans = new FoodItem('beans',10, true, true,true)
tortilla = new FoodItem('tortilla', 40, true, false, true)

avocado = new FoodItem('avocado', 50, true, true, true)
lime = new FoodItem('lime', 45, true, true, false)

tequila = new FoodItem('tequila',150, true,true,true)

burritoPlate = new Plate('Burrito Plate', 'A tasty burrito!', '$10', [rice, beans, tortilla])
guacamolePlate = new Plate('Guacamole Plate', 'Delicious guac', '$8', [avocado, lime])
margarita = new Drink('Margarita', 'Buy three, get two free!', [tequila, lime])


theMenu = new Menu([burritoPlate, guacamolePlate, margarita])

theRestaurant = new Restaurant("Dana's Diner", "Happy-hour starts at sunrise!", [theMenu])

theRestaurant.toString()





