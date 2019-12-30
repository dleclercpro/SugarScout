import Dot from 'components/Dot';
import * as Units from 'constants/Units';
import { VERY_LOW, LOW, HIGH, VERY_HIGH,
    TREND_DOUBLE_90_DOWN_MMOL_L_M,
    TREND_90_DOWN_MMOL_L_M,
    TREND_45_DOWN_MMOL_L_M,
    TREND_45_UP_MMOL_L_M,
    TREND_90_UP_MMOL_L_M,
    TREND_DOUBLE_90_UP_MMOL_L_M } from 'constants/BG';
import * as fmt from 'fmt';
import 'components/BG.scss';

class BG extends Dot {

    getClass() {
        const { value } = this.props;

        return 'dot bg bg--' + getType(value);
    }

    handleMouseEnter = (e) => {
        const { time, value } = this.props;
        const { updateBubble, showBubble } = this.props.actions;

        updateBubble({
            target: this.getClass(),
            time: time,
            info: {
                value: fmt.bg(value),
                units: Units.BG,
            },
        });
        
        showBubble();
    }
}

export const getType = value => {
    if (value <= VERY_LOW) {
        return 'very-low';
    }
    if (VERY_LOW < value && value <= LOW) {
        return 'low';
    }
    if (LOW < value && value < HIGH) {
        return 'normal';
    }
    if (HIGH <= value && value < VERY_HIGH) {
        return 'high';
    }
    if (VERY_HIGH <= value) {
        return 'very-high';
    }
    return 'unknown';
}

export const getTrendArrow = dBGdt => {
    if (dBGdt < TREND_DOUBLE_90_DOWN_MMOL_L_M) {
        return '↓↓';
    }
    if (TREND_DOUBLE_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < TREND_90_DOWN_MMOL_L_M) {
        return '↓';       
    }
    if (TREND_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < TREND_45_DOWN_MMOL_L_M) {
        return '↘';
    }
    if (TREND_45_DOWN_MMOL_L_M <= dBGdt && dBGdt < TREND_45_UP_MMOL_L_M) {
        return '→';
    }
    if (TREND_45_UP_MMOL_L_M <= dBGdt && dBGdt < TREND_90_UP_MMOL_L_M) {
        return '↗';
    }
    if (TREND_90_UP_MMOL_L_M <= dBGdt && dBGdt < TREND_DOUBLE_90_UP_MMOL_L_M) {
        return '↑';
    }
    if (TREND_DOUBLE_90_UP_MMOL_L_M <= dBGdt) {
        return '↑↑';
    }
}

export default BG;