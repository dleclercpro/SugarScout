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
            time: {
                units: 'h',
                zero: new Date(),
                scale: 6,
            },
            bg: {
                units: 'mmol/L',
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
        model: 'MiniMed Paradigm 722',
        units: {
            bg: 'mmol/L',
            basal: 'U/h',
            carbs: 'g',
        },
        settings: {
            dia: 5,
            maxBasal: 15.0,
            maxBolus: 25.0,
        },
        power: '2019.05.24 - 04:36:12',
        battery: [
            {
                time: 0,
                value: 1.24,
            },
        ],
        reservoir: [
            {
                time: 0,
                value: 186.1,
            },
        ],
        bgTargets: [
            {
                time: 0,
                values: [5.2, 5.2],
            },
        ],
        basal: {
            standard: [
                {
                    time: 0,
                    value: 1.45,
                },
                {
                    time: 1.0,
                    value: 1.6,
                },
            ],
            a: [],
            b: [],
        },
        tb: 0,
        iob: 0,
        isf: 0,
        csf: 0,
        cage: 0,
    },
    cgm: {
        company: 'Dexcom',
        model: 'G4',
        units: 'mmol/L',
        battery: [
            {
                time: 0,
                value: 90,
            },
        ],
        sage: 0,
    },
    bg: [
        {
            time: 0,
            value: 4.2,
        },
    ],
    alerts: {
        pump: {
            battery: {
                low: 1.3,
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
        bg: {
            veryLow: 3.2,
            low: 4.5,
            high: 8.0,
            veryHigh: 12.0,
        },
    },
}