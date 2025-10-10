import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';


export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full flex flex-col md:flex-row">
        {/* Image container */}
        <div className="absolute inset-0 h-full w-full md:relative md:w-1/2 md:h-full z-0">
          <Image 
            src="/naan.jpg"
            alt="Delicious Naan Bread"
            fill
            className="object-cover md:rounded-br-3xl shadow-xl shadow-black/40"
            priority
          />
        </div>
        {/* Text content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white w-full md:w-1/2 p-8 bg-black/40 md:bg-transparent">
          <h1 className="text-5xl font-bold">Welcome to Balaka</h1>          
          <h2 className="text-2xl font-extralight">
            Welcome to Balaka fine dining, where our highly experienced chef, with over 12 years
            of expertise, crafts fresh and authentic Indian cuisine that has earned accolades in numerous restaurants.
          </h2>
          {/* caroussel for reviews */}
          <div className="relative z-20 flex flex-row items-center justify-center space-x-4 mt-4">
            <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186518-d27983284-Reviews-Balaka_Indian_Restaurant-Dundee_Scotland.html?m=69573" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="simple-icons:tripadvisor"
                className="text-4xl text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
              />
            </a>
            <a href="https://share.google/6FtOvIapswtpawBsM" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="proicons:google-2"
                className="text-4xl text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
              />
            </a>
            <a href="https://www.facebook.com/61559928525856/about/?_rdr" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="ic:baseline-facebook"
                className="text-4xl text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
              />
            </a>
            <a href="https://www.just-eat.co.uk/restaurants-balaka-indian-restaurant-dundee/menu?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_GBR_EN_[RES]_[ENGM]_OD_Dundee_1007321&utm_campaignid=16699739647&gad_source=1&gad_campaignid=16699739647&gclid=Cj0KCQjw3aLHBhDTARIsAIRij5_5EwwlbvibJ-UThU8jjDF29ujReCdauHn7mbuZstEkRzm24AZx0mwaAjSEEALw_wcB" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="simple-icons:justeat"
                className="text-4xl text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
              />
            </a>
            <a href="https://deliveroo.co.uk/menu/fife-and-perthshire/dundee/balaka?srsltid=AfmBOopFIs3J5IXSZEf6m-PfWrzXZfRx13NbyB1c3SvPtK61xr9C_w8b" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="simple-icons:deliveroo"
                className="text-4xl text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
              />
            </a>
          </div>
        </div>
      </section>

      {/* section with map, sos folks will see the location and the reviews */}
      <section className="m-8">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              <div className="md:w-3/4 ">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.682058928804!2d-2.9909263999999998!3d56.45601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865d1da7e4b6e7%3A0x1d9c2c27107e1acc!2sBALAKA%20INDIAN%20RESTAURANT!5e0!3m2!1sen!2suk!4v1759952150547!5m2!1sen!2suk" className="w-full h-96 rounded-3xl shadow-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="md:w-1/4 bg-amber-200 text-blue-900 rounded-3xl p-4 m-4 h-full shadow-2xl">
                  <p className="text-2xl md:text-lg font-semibold text-center mb-4">
                    We are located at 123 Perth Road, Dundee, DD1 4JD in one of the liveliest street of Dundee city centre. We pride ourselves on offering a warm and welcoming atmosphere.
                  </p>
              </div>
              
          </div>
      </section>



      <section className="relative h-screen w-full flex flex-col md:flex-row">
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white w-full md:w-1/2 p-8 bg-black/40 md:bg-transparent">          
          <h2 className="text-2xl font-extralight">our commitment to quality shines through as we meticulously select the freshest ingredients,
            sourcing locally whenever possible, to uphold the highest standards in our dishes.
          </h2>
        </div>
        <div className="absolute inset-0 h-full w-full md:relative md:w-1/2 md:h-full z-0">
          <Image 
          src="/chutney.jpg"
          alt="a plate of pilau rice"
          fill
          className="object-cover md:rounded-tl-3xl shadow-2xl shadow-black"
          priority
          />
        </div>
      </section>
      
      
    
    </>
  );
}
