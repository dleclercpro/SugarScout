import Dot from 'components/Dot';
import * as Units from 'constants/Units';
import * as fmt from 'fmt';
import 'components/IOB.scss';

class IOB extends Dot {

    getClass() {
        return 'dot iob';
    }

    handleMouseEnter = (e) => {
        const { time, value } = this.props;
        const { updateBubbleInfos, showBubble } = this.props.actions;

        updateBubbleInfos({
            target: this.getClass(),
            time: time,
            info: {
                value: fmt.iob(value),
                units: Units.BOLUS,
            },
        });
        
        showBubble();
    }
}

export default IOB;