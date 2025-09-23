import { europeanDishesData } from '../../../../data/europeanDishes.js';
import FoodItems from '@/components/food-items.js';

const listItems = europeanDishesData.map((item) =>
    <FoodItems
        key={item.name}
        itemName={item.name}
        itemPrice={item.price}
    />

    );

export default function europeanDishes()
{
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}