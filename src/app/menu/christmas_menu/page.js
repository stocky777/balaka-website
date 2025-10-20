import { starter, mains, desserts, to_finish } from '../../../../data/christmas_menu.js';
import Image from 'next/image.js';
//import FoodItems from '@/components/food-items.js';
export default function chefsReccomended()
{

    //starter menu items
    const starterItems = starter.map((item) => (
        <div key={item.name} className='bg-linear-to-br from-blue-800 to-green-800 m-2 p-2 rounded-lg shadow-md shrink-0'>
                <div className='text-2xl font-semibold'>{item.name}</div>
                <div className='text-1xl'>{item.description}</div>
            </div>
        )); 
    //main menu items
    const mainItems = mains.map((item) => (
        <div key={item.name} className='bg-linear-to-br from-blue-800 to-green-800 m-2 p-2 rounded-lg shadow-md shrink-0'>
                <div className='text-2xl font-semibold'>{item.name}</div>
                <div className='text-1xl'>{item.description}</div>
                <div className='text-1xl'>{item.option_1}</div>
                <div className='text-2xl'>{item.option_2}</div>
            </div>
        ));
        
    const dessertItems = desserts.map((item) => (
        <div className=''>
            <div key={item.name} className='bg-linear-to-br from-blue-800 to-green-800 m-2 p-2 rounded-lg shadow-md shrink-0'>
                    <div className='text-2xl font-semibold'>{item.name}</div>
                    <div className='text-2xl'>{item.description}</div>
            </div>
        </div>
        )); 

    const ExtraItems = to_finish.map((item) => (
        <div key={item.name} className='bg-linear-to-br from-blue-900 to-green-900 m-2 p-2 rounded-lg shadow-md shrink-0'>
                <div className='text-2xl font-semibold'>{item.name}</div>
                <div className='text-2xl'>{item.description}</div>
            </div>
        )); 

    return(
            <div className='relative min-h-screen'>
                <Image
                    src="/christmas_menu_banner.jpg"
                    alt="Christmas Menu Banner"
                    fill
                    className="absolute -z-10 h-full w-full object-cover object-center opacity-30"
                    priority
                />
                {/* bg-linear-330 from-green-900 to-red-900 bg-clip-text */}
                <div>
                    <section className="p-8">
                        <h1 className=' text-5xl sm:text-7xl text-center font-semibold text-white'>Starter</h1>
                        <div className='flex flex-wrap sm:flex-row justify-center gap-4'>
                            {starterItems}
                        </div>
                    
                    </section>
                    <section className="p-8">
                        <h1 className='text-5xl sm:text-7xl text-center font-semibold text-white'>Main</h1>
                        <div className='flex flex-wrap sm:flex-row justify-center gap-4'>
                            {mainItems}
                        </div>
                    </section>
                <section className="p-8">
                    <h1 className='text-5xl sm:text-7xl text-center font-semibold text-white'>Dessert</h1>
                    <div className='flex flex-wrap sm:flex-row justify-center gap-4'>
                        {dessertItems}
                    </div>
                </section>
                <section className="p-8">
                    <h1 className='text-5xl sm:text-7xl text-center font-semibold text-white'>To finish</h1>
                    <div className='flex flex-wrap sm:flex-row justify-center gap-4'>
                        {ExtraItems}
                    </div>
                </section>
                </div>
                
        </div>
    );

}