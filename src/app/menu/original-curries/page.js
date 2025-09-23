import { originalcurries } from '../../../../data/original-curries.js';
import FoodItems from '@/components/food-items.js';
const listItems = originalcurries.map((item) => (
    <FoodItems 
        key={item.name}
        itemName={item.name}
        itemDescription={item.description}
    />
))


export default function originalCurries(){
    return(
        <div>
            <div>
                <h1 className='text-2xl text-amber-600 m-2 p-2 text-center'>
                    Select your protein option when ordering: 
                </h1>
                <h1 className='text-3xl text-amber-600 m-2 p-2 text-center'>
                    Chicken £10.95 | Lamb £12.95 | Prawn £12.95 | King Prawn £15.95 | Vegetable £9.95
                </h1>
            </div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}