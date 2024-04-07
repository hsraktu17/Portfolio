"use client";

export default function () {
  return (
    <nav className="fixed top-0 w-full  text-white shadow-md">
      <div className="flex justify-center items-center p-4 border">
        <div className="flex space-x-14 text-black dark:text-white">
          <div>
            <a className="px-4 py-2  rounded hover:border transition-transform">Home</a>
          </div>
          <div>
            <a className="px-4 py-2  rounded hover:border transition-transform">About</a>
          </div>
          <div>
            <a className="px-4 py-2  rounded hover:border transition-transform">Skills</a>
          </div>
          <div>
            <a className="px-4 py-2  rounded hover:border transition-transform">Projects</a>
          </div>
          <div>
            <a className="px-4 py-2  rounded hover:border transition-transform">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
