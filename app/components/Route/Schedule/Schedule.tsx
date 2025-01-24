export const Schedule = () => {

    return (
        <div className="container py-[80px]">
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Time</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Mon</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Tue</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Wed</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Thu</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Fri</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Sat</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "6:00 AM",
                            "7:00 AM",
                            "8:00 AM",
                            "9:00 AM",
                            "10:00 AM",
                            "11:00 AM",
                        ].map((time, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{time}</td>
                                <td className="border border-gray-300 px-4 py-2">Pilates</td>
                                <td className="border border-gray-300 px-4 py-2">Yoga</td>
                                <td className="border border-gray-300 px-4 py-2">HIIT</td>
                                <td className="border border-gray-300 px-4 py-2">Stretching</td>
                                <td className="border border-gray-300 px-4 py-2">Barre</td>
                                <td className="border border-gray-300 px-4 py-2">Rest</td>
                                <td className="border border-gray-300 px-4 py-2">Open Gym</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}