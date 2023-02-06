import * as list from './modules/list';
import * as user from './modules/user';
import * as item from './modules/item';

export default Object.assign(list.mutations, user.mutations, item.mutations);
