import Link from "next/link";

const NotFound = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-base-100 px-6">
            <div className="w-full max-w-2xl text-center">

                {/* 404 */}
                <h1 className="text-[140px] sm:text-[180px] font-black leading-none text-base-content/10">
                    404
                </h1>

                {/* Page Not Found */}
                <div className="mt-2">
                    <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold tracking-wider text-white">
                        PAGE NOT FOUND
                    </span>
                </div>

                {/* Title */}
                <h2 className="mt-8 text-3xl font-bold text-base-content">
                    This Story Couldn’t Be Found
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-lg text-base-content/60 leading-7">
                    Looks like this story has gone missing from our newsroom.
                    Our reporters are already looking for it.
                </p>

                {/* Newsroom Status */}
                <div className="mx-auto mt-7 max-w-md rounded-lg border border-base-300 bg-base-200 p-4">

                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">
                            NEWSROOM STATUS
                        </span>

                        <span className="flex items-center gap-2 text-sm text-green-600">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            Online
                        </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-base-300">
                        <div className="h-full w-2/3 rounded-full bg-red-500 animate-pulse"></div>
                    </div>

                    <p className="mt-3 text-xs text-base-content/50">
                        Reporter searching for the missing story...
                    </p>

                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                    <Link
                        href="/"
                        className="rounded-md bg-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-600 hover:-translate-y-0.5"
                    >
                        Back to Homepage
                    </Link>

                    <Link
                        href="/"
                        className="rounded-md border border-base-300 px-6 py-3 font-semibold text-base-content transition duration-300 hover:bg-base-200"
                    >
                        Explore News
                    </Link>

                </div>

                {/* Footer */}
                <p className="mt-10 text-sm text-base-content/40">
                    Dragon News • Journalism Without Fear or Favour
                </p>

            </div>
        </main>
    );
};

export default NotFound;