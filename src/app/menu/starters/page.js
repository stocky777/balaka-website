import { menuStarters} from '../../../../data/menuStarters.js';
import FoodItems from '@/components/food-items.js';
export default function startersPage()
{
    //const itemCount = menuStarters.length;
    // Display each starter item
    const listItems = menuStarters.map((item) => (
        // <div key={item.name} className='bg-amber-600 m-2 p-2 rounded-lg shadow-md shrink-0'>
        //     <div className='text-3xl'>{item.name}</div>
        //     <div className='text-2xl'>{item.description}</div>
        //     <div className='text-3xl'>£{item.price}</div>         
        // </div>
        <FoodItems
            key={item.name}
            itemName={item.name}
            itemDescription={item.description}
            itemPrice={item.price}
        />
    ));

    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}