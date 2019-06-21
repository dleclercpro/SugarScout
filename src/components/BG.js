import Dot from 'components/Dot'
import * as Units from 'constants/Units'
import * as bg from 'constants/BG'
import * as lib from 'lib'
import 'components/BG.scss'

class BG extends Dot {

    getClass() {
        return 'dot bg bg--' + getType(this.props.value)
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubbleInfos({
            target: this.getClass(),
            time: this.props.time,
            info: {
                value: lib.formatBG(this.props.value),
                units: Units.BG,
            },
        })
        this.props.actions.showBubble()
    }
}

export const getType = (value) => {
    if (value <= bg.VERY_LOW) {
        return 'very-low'
    }
    if (bg.VERY_LOW < value && value <= bg.LOW) {
        return 'low'
    }
    if (bg.LOW < value && value < bg.HIGH) {
        return 'normal'
    }
    if (bg.HIGH <= value && value < bg.VERY_HIGH) {
        return 'high'
    }
    if (bg.VERY_HIGH <= value) {
        return 'very-high'
    }
    return 'unknown'
}

export default BG