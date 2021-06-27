export default function Select() {
  return (
    <div className="relative w-3/12 mr-5">
      <span className="absolute inset-y-0 flex items-center pl-2 right-8">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            fill="none"
            viewBox="0 0 30 29"
          >
            <path
              fill="#42C2B3"
              fillRule="evenodd"
              d="M5.455 0C2.442 0 0 2.36 0 5.273v18.454C0 26.64 2.442 29 5.455 29h19.09C27.559 29 30 26.64 30 23.727V5.273C30 2.36 27.558 0 24.546 0H5.454zm19.09 2.636H5.456c-1.507 0-2.728 1.18-2.728 2.637v18.454c0 1.456 1.221 2.637 2.728 2.637h19.09c1.507 0 2.728-1.18 2.728-2.637V5.273c0-1.456-1.221-2.637-2.727-2.637zM11.144 13.852l-1.928-1.864L15 6.395l5.785 5.593-1.928 1.864L15 10.124l-3.857 3.728zm0 1.297l-1.928 1.864L15 22.605l5.785-5.592-1.928-1.864L15 18.877l-3.857-3.728z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
      <select className="w-full px-6 py-3 text-base appearance-none focus:outline-none focus:ring focus:ring-blue text-orange bg-green-dark">
        <option>Programming Language</option>
      </select>
    </div>
  );
}
