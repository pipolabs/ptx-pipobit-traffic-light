enum TrafficLightColors {
    //% block
    //% block.loc.es-ES="rojo"
    red = 0,
    //% block
    //% block.loc.es-ES="ambar"
    yellow = 1,
    //% block
    //% block.loc.es-ES="verde"
    green = 2,
}

enum States {
    //% block
    //% block.loc.es-ES="apagado"
    off = 0,
    //% block
    //% block.loc.es-ES="encendido"
    on = 1,
}

//% color="#DAA520" icon="\uf1b9" weight=100
//% block="Traffic Light"
//% block.loc.es-ES="Semáforo"
namespace pipobitTrafficLight {

    let trafficLightPins = [
        DigitalPin.P0,
        DigitalPin.P1,
        DigitalPin.P2,
    ];

    //% block="Set $color traffic light on pin $p"
    //% block.loc.es-ES="Establecer semáforo $color en pin $p"
    //% weight=20
    //% color.fieldEditor="gridpicker" color.fieldOptions.width=220 color.fieldOptions.columns=3
    //% p.fieldEditor="gridpicker" p.fieldOptions.width=220 p.fieldOptions.columns=3
    export function setTrafficLightPin(color: TrafficLightColors, p: DigitalPin) {
        trafficLightPins[color] = p;
    }

    //% block="Change $color traffic light to $state"
    //% block.loc.es-ES="Cambiar semáforo $color a $state"
    //% weight=10
    //% color.fieldEditor="gridpicker" color.fieldOptions.width=220 color.fieldOptions.columns=3
    export function setTrafficLightState(color: TrafficLightColors, state: States) {
        pins.digitalWritePin(trafficLightPins[color], state);
    }
}