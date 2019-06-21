import Dot from 'components/Dot'
import * as Units from 'constants/Units'
import * as lib from 'lib'
import 'components/IOB.scss'

class IOB extends Dot {

    getClass() {
        return 'dot iob'
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubbleInfos({
            target: this.getClass(),
            time: this.props.time,
            info: {
                value: lib.formatIOB(this.props.value),
                units: Units.BOLUS,
            },
        })
        this.props.actions.showBubble()
    }
}

export default IOB