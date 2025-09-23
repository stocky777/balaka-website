import { menuVegetableSides } from "../../../../data/vegetarianDishes";
import FoodItems from "@/components/food-items.js";

const listItems = menuVegetableSides.map((item) => (
    <FoodItems
        key={item.name}
        itemName={item.name}
        itemDescription={item.description}
        itemPrice={`£${item.price}`}
    />
));

export default function vegetarianDishesPage() {
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )

}