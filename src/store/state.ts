import * as list from './modules/list';
import * as user from './modules/user';
import * as item from './modules/item';

export default Object.assign(list.state, user.state, item.state);
