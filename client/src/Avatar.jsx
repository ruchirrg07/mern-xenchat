export default function Avatar({userId,username,online}) {
    const colors = ['bg-red-300', 'bg-green-300', 'bg-purple-300', 'bg-blue-300', 'bg-pink-300', 'bg-yellow-300', 'bg-orange-300', 'bg-teal-300', 'bg-brown-300'];
    const userIdBase10 = parseInt(userId, 16);
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex];
    return (
        <div className={"w-8 h-8 relative rounded-full text-center flex items-center "+color}>
            <div className="text-center w-full opacity-80">{username[0]}</div>
            {online && (
                <div className="absolute w-2.5 h-2.5 bg-green-500 bottom-0 right-0 rounded-full border border-white"></div>
            )}
            {!online && (
                <div className="absolute w-2.5 h-2.5 bg-gray-500 bottom-0 right-0 rounded-full border border-white"></div>
            )}
        </div>
    );
}