// C3.4. Практическое задание 4

function ElectricAppliance(name, plugged){
    this.voltage = 220,
    this.current = 0,
    this.plugged = plugged,
    this.name = name
}

ElectricAppliance.prototype.plugIn = function() {
    this.plugged = true
    console.log(`Aplliance ${this.name} is plugged in.`)
}

ElectricAppliance.prototype.plugOut = function() {
    this.plugged = false
    console.log(`Aplliance ${this.name} is unplugged.`)
}

ElectricAppliance.prototype.calcPower = function() {
    console.log(`Power consumption of ${this.name} is ${(this.voltage*this.current).toFixed(1)} Watt.`)
}


function Lamp(name, plugged, lampType, current){
    this.plugged = plugged,
    this.name = name,   
    this.lampType = lampType
    this.lampOn = false
    this.current = current
    this.switchLamp = function(){
        if (this.plugged) {
            this.lampOn = ! this.lampOn
            console.log(`${this.name} is ${this.lampOn?'On':'Off'}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
}

Lamp.prototype = new ElectricAppliance()


function hoover(name){
    this.name = name
    this.switchedOn = false
    this.current = 8
    this.turnOnOff = function(){
        if (this.plugged) {
            this.switchedOn = ! this.switchedOn
            console.log(`${this.name} is ${this.switchedOn?'On':'Off'}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
    this.plugOut = function(){
        this.turnOnOff()
        this.plugged = false
        console.log(`Aplliance ${this.name} is plugged out.`)
    }
}

hoover.prototype = new ElectricAppliance()


function fridge(name){
    this.name = name
    this.fridgeTemp
    this.freezerTemp
    this.current = 1.2
    this.setFridgeTemp = function(temp){
        if (this.plugged) {
            this.fridgeTemp = temp
            console.log(`${this.name} fridge temperature is set to ${this.fridgeTemp}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }
    
    this.getFridgeTemp = function () {
        console.log(`Temperature in fridge is ${this.fridgeTemp}.`)
    }


    this.setFreezerTemp = function(temp){
        if (this.plugged) {
            this.freezerTemp = temp
            console.log(`${this.name} freezer temperature is set to ${this.freezerTemp}.`)
        } else {
            console.log(`Plugin ${this.name} before.`)
        }
    }

    this.getFreezerTemp = function () {
        console.log(`Temperature in freezer is ${this.freezerTemp}.`)
    }

    this.plugOut = function(){
        this.plugged = false
        this.switchedOn = false
        this.freezerTemp = undefined
        this.fridgeTemp = undefined
        console.log(`Aplliance ${this.name} is plugged out.`)
    }
}

fridge.prototype = new hoover()

fridge.prototype.plugIn = function(){
    this.plugged = true
    console.log(`Aplliance ${this.name} is plugged in.`)
    this.turnOnOff()
}


const tableLamp = new  Lamp('Table lamp','','diode', 0.1)
tableLamp.switchLamp()
tableLamp.plugIn()
tableLamp.switchLamp()
tableLamp.calcPower()
tableLamp.switchLamp()
tableLamp.plugOut()
console.log(tableLamp)


const chandelier = new Lamp('Chandelier', true, 'incadescent', 0.27)
chandelier.switchLamp()
chandelier.calcPower()
console.log(chandelier)


const greenBosch = new hoover('Green Bosch vacuum cleaner')
greenBosch.plugIn()
greenBosch.turnOnOff()
greenBosch.calcPower()
greenBosch.plugOut()
console.log(greenBosch)


const myFreezer = new fridge('LG freezer')
myFreezer.plugIn()
myFreezer.setFreezerTemp(3)
myFreezer.setFridgeTemp(-18)
myFreezer.getFreezerTemp()
myFreezer.getFridgeTemp()
myFreezer.calcPower()
myFreezer.plugOut()
console.log(myFreezer)
