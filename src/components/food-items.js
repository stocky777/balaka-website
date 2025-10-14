export default function FoodItems({itemName, itemDescription, itemPrice})
{
    return(
        <section className="flex flex-col m-4 p-1">
            <div key={itemName} className='bg-gradient-to-r from-blue-900 to-blue-400 p-2 rounded-lg shadow-md'>
                <div className='text-3xl p-4 m-2 '><h1>{itemName}</h1></div>
                <div className='m-3 text-center'><p>{itemDescription}</p></div>
                {/* error persisted, quick fix for the moment */}
                {typeof itemPrice === 'number' && (
                    <div className='justify-self-end text-2xl text-right'><h1 className="bg-amber-400 w-auto p-3 rounded-full ">{`£${itemPrice.toFixed(2)}`}</h1></div>
                )}
                {typeof itemPrice === 'string' && itemPrice && (
                    <div className='text-3xl bg-white text-right w-auto'><h1>{itemPrice}</h1></div>
                )}
            </div>
        </section>
    );
}