import FoodItems from '@/components/food-items.js';
import { seafood } from '../../../../data/seafood.js';

export default function chefsReccomended()
{
    //const itemCount = menuStarters.length;
    // Display each starter item
    const listItems = seafood.map((item) => (
        // <div key={item.title} className='bg-amber-600 m-2 p-2 rounded-lg shadow-md shrink-0'>
        //     <div className='text-3xl'>{item.title}</div>
        //     <div className='text-2xl'>{item.description}</div>
        //     <div className='text-3xl'>{item.price}</div>
        // </div>
        <FoodItems
            key={item.title}
            itemName={item.title}
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