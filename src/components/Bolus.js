import Dot from 'components/Dot';
import * as Units from 'constants/Units';
import * as fmt from 'fmt';
import 'components/Bolus.scss';

class Bolus extends Dot {

    getClass() {
        return 'dot bolus';
    }

    handleMouseEnter = (e) => {
        const { time, value } = this.props;
        const { updateBubble, showBubble } = this.props.actions;

        updateBubble({
            target: this.getClass(),
            time: time,
            info: {
                value: fmt.bolus(value),
                units: Units.BOLUS,
            },
        });
        
        showBubble();
    }
}

export default Bolus;