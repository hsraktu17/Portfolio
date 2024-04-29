import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <div id="contact" className="text-center flex flex-col items-center pb-10">
            <p className="text-3xl font-medium capitalize mb-8">
               Contact Me 
            </p>
            <p className="mb-4">
                Please contact me directly at <a href="mailto:utkarsh172002srivastava@gmail.com" className="underline">utkarsh172002srivastava@gmail.com</a> or through this form.
            </p>
            <input
                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-4 w-full sm:w-1/2 lg:w-1/3 text-black"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
            />
            <textarea
                className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full sm:w-1/2 lg:w-1/3 text-black"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
            />
            <button
                type="submit"
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 mt-5"
            >
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
        </div>
    )
}