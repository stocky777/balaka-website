export default function Timetable() {
  return (
    <section className="backdrop-blur-2xl bg-white/30 rounded-3xl shadow-xl shadow-black/40 p-8 m-4">    
        <h2 className="text-3xl font-semibold mb-4 text-white">Opening Hours</h2>
        <table className="w-full text-left text-white">
            <tbody>
                <tr>
                    <td className="py-2">Mon</td>
                    <td className="py-2">4:30 PM - 10:00 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Tue</td>
                    <td className="py-2">4:30 PM - 10:00 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Wed</td>
                    <td className="py-2">4:30 PM - 10:00 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Thu</td>
                    <td className="py-2">4:30 PM - 10:00 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Fri</td>
                    <td className="py-2">4:30 PM - 10:30 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Sat</td>
                    <td className="py-2">4:30 PM - 10:30 PM</td>
                </tr>
                <tr>
                    <td className="py-2">Sun</td>
                    <td className="py-2">4:30 PM - 10:00 PM</td>
                </tr>
            </tbody>
        </table>
    </section>
    

    );
}