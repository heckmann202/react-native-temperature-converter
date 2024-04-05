const UNITS = {
    celcius: '°C',
    fahrenheit: '°F'
}

const convertTemperatureTo = (temperature, unitTo) => {
    if(unitTo === UNITS.celcius){
        return (temperature - 32) / 1.8;
    } else if (unitTo === UNITS.fahrenheit){
        return temperature * 1.8 + 32
    } else {
        throw new Error('Invalid Unit')
    }
}

const getOppositeUnit = (unit) => {
    return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius
}

const isIceTemperature = (temperature, unit) => {
    if(unit === UNITS.celcius){
        return temperature <= 0
    } else if( unit === UNITS.fahrenheit){
        return temperature <= 32
    } else throw new Error('Invalid Unit')
}
export {UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature}