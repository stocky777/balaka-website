import Image from "next/image"
import { Icon } from '@iconify/react';

export default function About(){
    return(
    <section className="relative h-screen w-full">
        <div className="relative h-full items-center justify-center text-center text-white ">          
            {/* <img src="/family_picture_improved2.png" alt="family potrait" /> */}
            <Image
                src="/family_picture_improved2.png"
                alt="Balaka Restaurant Family Portrait"
                fill
                className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center opacity-30"
            />
            <div className="relative z-10 p-6 py-26 bg-opacity-50 inline-block">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="md:w-1/2">
                        <p className="text-lg mb-4">Thank you for visiting our website! We are a family-owned Indian restaurant dedicated to bringing you the authentic flavors of India. Our journey began with a passion for traditional Indian cuisine and a desire to share it with our community. you can find us at</p>
                    </div>
                    <div className="md:w-1/2 items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.682058928804!2d-2.9909263999999998!3d56.45601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865d1da7e4b6e7%3A0x1d9c2c27107e1acc!2sBALAKA%20INDIAN%20RESTAURANT!5e0!3m2!1sen!2suk!4v1759952150547!5m2!1sen!2suk" className="w-full h-96 rounded-3xl shadow-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="mt-6 p-4">
                    <p className="text-lg mb-4">
                        if you have any query or want to make a reservation, please give us a call. We look forward to serving you and making your dining experience memorable!
                    </p>
                </div>
                <div className="flex flex-row space-x-8">
                    
                    <div className="text-lg align-middle text-center mb-4 rounded-lg shadow-md bg-blue-900 w-1/2">
                        <p className=" p-4">
                            You can email us at: <a href="mailto:info@balaka.com" className="text-amber-300 underline">
                                <Icon
                                    icon="material-symbols:mail"
                                    className="text-lg text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
                                />
                                info@balaka.com
                            </a>
                        </p>
                    </div>
                    <div className="text-lg align-middle text-center mb-4 rounded-lg shadow-md bg-blue-900 w-1/2">
                        <span className="h-full bg-white">
                            <Icon
                                    icon="material-symbols:phone-in-talk"
                                    className="text-4xl bg-blue-950 rounded-full text-amber-200 cursor-pointer hover:scale-150 transition-transform duration-200 hover:text-amber-500"
                                />
                        </span>
                        <p className="p-4">
                            You can call us at: <a href="callto:+441382660340" className="text-amber-400 underline">
                                +441382660340</a>
                        </p>    
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    </section>
    
    )
}