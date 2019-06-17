import Brief from './Brief';
import List from './List';
import ListItem from './ListItem';

const ListComponent: any = List;
ListComponent.Item = ListItem;
ListComponent.Item.Brief = Brief;

export default ListComponent;
