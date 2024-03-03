import Link from "next/link";

function notfound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>

            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go back to home</Link>
        </div>
    );
}

export default notfound;
