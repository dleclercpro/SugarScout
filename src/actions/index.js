import * as AxesActions from 'actions/AxesActions';
import * as BubbleActions from 'actions/BubbleActions';
import * as FetchActions from 'actions/FetchActions';
import * as InnerActions from 'actions/InnerActions';
import * as TimeActions from 'actions/TimeActions';

const Actions = {
    ...AxesActions,
    ...BubbleActions,
    ...FetchActions,
    ...InnerActions,
    ...TimeActions,
};

export default Actions;