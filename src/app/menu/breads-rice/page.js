//import { menuBreadsRice } from '../../../../data/breadRice.js';
import { menuBreadsRice} from '../../../../data/breadRice.js';
import FoodItems from '@/components/food-items.js';

const listItems = menuBreadsRice.map((item) => (
    <FoodItems
        key={item.name}
        itemName={item.name}
        itemDescription={item.description}
        itemPrice={`£${item.price.toFixed(2)}`}
    />
));

console.log(listItems);
export default function breadsRicePage()
{
    return (
        <ul>
            {listItems}
        </ul>
    );
}