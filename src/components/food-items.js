export default function FoodItems({itemName, itemDescription, itemPrice})
{
    return(
        <section className="">
            <div key={itemName} className='bg-amber-600 m-2 p-2 rounded-lg shadow-md shrink-0'>
                <div className='text-3xl'><h1>{itemName}</h1></div>
                <div className='text-2xl'><h1>{itemDescription}</h1></div>
                {/* error persisted, quick fix for the moment */}
                {typeof itemPrice === 'number' && (
                    <div className='text-3xl'><h1>{`£${itemPrice.toFixed(2)}`}</h1></div>
                )}
                {typeof itemPrice === 'string' && itemPrice && (
                    <div className='text-3xl'><h1>{itemPrice}</h1></div>
                )}
            </div>
        </section>
    );
}