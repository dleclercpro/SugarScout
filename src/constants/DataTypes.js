// Data sources
export const BG = 'bgs'
export const PUMP = 'pump'
export const TREATMENT = 'treatments'
export const HISTORY = 'history'


// Objects
export class TimeData {

    constructor(value, time = -1, duration = -1) {
        this.time = time
        this.value = value
        this.duration = duration
    }

    getTime = () => {
        return this.time
    }

    getValue = () => {
        return this.value
    }
    
    getDuration = () => {
        return this.duration
    }

    setTime = (time) => {
        this.time = time
    }

    setValue = (value) => {
        this.value = value
    }

    setDuration = (duration) => {
        this.duration = duration
    }
}