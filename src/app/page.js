import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full">
        <Image 
        src="/naan.jpg"
        alt="Delicious Naan Bread"
        fill
        className="object-cover z-0"
        priority
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white ">
          <h1 className="text-5xl font-bold">Welcome to Balaka</h1>          
          <h2 className="text-2xl font-extralight">Welcome to Balaka fine dining, where our highly experienced chef, with over 12 years
            of expertise, crafts fresh and authentic Indian cuisine that ahs earned accolades in numerous restaurants.</h2>
        </div>
      </section>
      <section className="relative h-screen w-full">
        <Image 
        src="/pilau.jpg"
        alt="Delicious Naan Bread"
        fill
        className="object-cover z-0"
        priority
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white ">          
          <h2 className="text-2xl font-extralight">our commitment to quality shines through as we meticulously select the freshest ingredients,
            sourcing locally whenever possible, to uphold the highest standards in our dishes.
          </h2>
        </div>
      </section>
      <section className="relative h-screen w-full">
        <Image 
        src="/chutney.jpg"
        alt="Delicious Naan Bread"
        fill
        className="object-cover z-0"
        priority
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white ">          
          <h2 className="text-2xl font-extralight">
            your dining experiece means a lot to us, and the entire balaka team works tirelessly to ensure your complete satisfaction
          </h2>
          <h2 className="text-2xl font-semibold">
            pssttt... look at our reviews on google, tripadvisor and facebook
          </h2>
          <button className="bg-blue-500 p-3 mt-2 rounded-2xl font-light">
            <a href="">reviews</a>
          </button>
        </div>
      </section>
      <section className="relative h-screen w-full">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white ">          
          <h2 className="text-2xl font-extralight">
            We value your feedback and welcome any comments or suggestions that can help us make your time with us even more enjoyable
          </h2>
          <h2 className="text-2xl font-bold text-amber-500 bg-amber-100 p-3 rounded-2xl">
            if you have any dietary requirements or allergies, please inform a member or Call us on 01382 660340
          </h2>
        </div>
      </section>
      
    
    </>
  );
}
