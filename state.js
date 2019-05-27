const state = {
    user: {
        firstName: 'David',
        lastName: 'Leclerc',
        birthday: {
            day: 27,
            month: 12,
            year: 1991,
        },
    },
    graph: {
        theme: 'dark',
        axes: {
            t: {
                units: 'h',
                zero: new Date(),
                scale: 6,
            },
            BG: {
                units: null,
                range: [0, 15],
                scale: 'linear',
            },
            basal: {
                units: 'U/h',
                range: [-5, 5],
                scale: 'linear',
            },
        }
    },
    pump: {
        company: 'Medtronic',
        name: 'MiniMed Paradigm 722',
        units: {
            BG: 'mmol/L',
            basal: 'U/h',
            carbs: 'g',
        },
        battery: 0,
        reservoir: 0,
        basal: 0,
        BGTargets: [{
            t: {
                h: 0,
                m: 0,
            },
            BG: 5.2,
        }],
        TB: 0,
        IOB: 0,
        ISF: 0,
        CSF: 0,
        CAGE: 0,
    },
    cgm: {
        company: 'Dexcom',
        name: 'G4',
        units: 'mmol/L',
        battery: 0,
        SAGE: 0,
    },
    BG: {
        now: 5.0,
        delta: 0, // deviation in last 5 minutes
    },
    alerts: {
        pump: {
            battery: {
                low: 1.3 // V
            },
            reservoir: {
                low: 10,
            },
        },
        cgm: {
            battery: {
                low: 20,
            }
        },
        BG: {
            veryLow: 3.2,
            low: 4.5,
            high: 8.0,
            veryHigh: 12.0,
        },
    },
}