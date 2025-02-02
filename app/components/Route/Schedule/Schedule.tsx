const tableHeader = ["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const classTimeList = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
];

const scheduleData = [
    ["", "グループ", "グループ", "", "グループ", "", ""], // 9:00 AM
    ["グループ", "グループ", "", "", "グループ", "", ""], // 10:00 AM
    ["グループ", "グループ", "", "", "", "", ""], // 11:00 AM
    ["", "", "", "", "", "グループ", ""], // 12:00 PM
    ["", "", "", "", "", "", ""], // 1:00 PM
    ["グループ", "", "", "", "", "", ""], // 2:00 PM
];

export const Schedule = () => {
    return (
        <div className="container py-[60px]">
            <div className="overflow-x-auto ">
                <table className="table-auto  w-full ">
                    <thead className="bg-grey-200">
                        <tr className="">
                            {tableHeader.map((header, index) => (
                                <th key={index} className="border border-gray-300 px-4 py-2 bg-gray-100 w-[100px]">
                                    {header}
                                </th>
                            ))}
                            {/* <th className="border border-gray-300 px-4 py-2 bg-gray-100 rounded-tl-lg">Time</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Mon</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Tue</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Wed</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Thu</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Fri</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Sat</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Sun</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {classTimeList.map((time, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{time}</td>
                                {scheduleData[index]?.map((className, dayIndex) => (
                                    <td key={dayIndex} className="border border-gray-300 px-4 py-2">
                                        {className}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
