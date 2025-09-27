import { menuTandoori } from '../../../../data/menuTandoori.js';
import FoodItems from '@/components/food-items.js';
export default function chefsReccomended()
{
    //const itemCount = menuStarters.length;
    // Display each starter item
    const listItems = menuTandoori.map((item) => (
    //     <div key={item.title} className='bg-amber-600 m-2 p-2 rounded-lg shadow-md shrink-0'>
    //         <div className='text-3xl'>{item.title}</div>
    //         <div className='text-2xl'>{item.description}</div>
    //         <div className='text-3xl'>{item.price}</div>
    //     </div>
    // ));
        <FoodItems
            key={item.name}
            itemName={item.name}
            itemDescription={item.description}
            itemPrice={item.price}
        />
    ));

    return(
        <div>
            <div className='text-1xl font-bold m-4 text-center'>
                <h1>Indias very own and unique style of cooking. Chicken, lamb  or king prawn marinated overnight in yoghurt,
                    lemon jice, garlic, ginger, turmeric and mixed tandoori spices, cooked over a charcoal flmae in a tandoor oven.
                    Served with Pilau rice, mild / medium or hot sauce and salad on the side. Served in a sizzling dish.
                </h1>
            </div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}
