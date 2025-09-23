import { TikkaMasala } from "../../../../data/tikkaMasala";
import FoodItems from "@/components/food-items.js";

const listItems = TikkaMasala.map((item) => (
    <FoodItems 
        key={item.name}
        itemName={item.name}
        itemPrice={`£${item.price}`}
    />
));

export default function tikkaMasala()
{
    return(
        <div>
            <div>
                <h1 className='text-3xl text-amber-600 m-2 p-2 text-center'>
                    Tikka masala dishes
                </h1>
                <h1 className="text-2xl text-amber-600 m2 p-2 text-center">
                    One of the most popular Indian dishes in allover the UK, with cubes of succulent breast/ tender lamb / fresh water King prawns in mild and creamy sauce with coconut and ground almonds 
                </h1>
            </div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}