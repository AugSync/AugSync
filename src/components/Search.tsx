export type ISearchProps = {
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ search, onChange }: ISearchProps) {
  return (
    <view className="flex flex-col items-start justify-start w-full px-16 my-10 sm:flex-row sm:items-center my-masonry-grid_max-width">
      <h3 className="mb-2 text-lg text-center sm:mb-0 sm:mr-5 font-play text-blue">
        Search
      </h3>
      <div className="relative w-full">
        <span className="absolute inset-y-0 flex items-center pl-2 right-8">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="39"
              fill="none"
              viewBox="0 0 40 39"
            >
              <path
                fill="#42C2B3"
                fillRule="evenodd"
                d="M30.306 26.635c5.172-6.476 4.704-15.846-1.402-21.8-6.612-6.447-17.333-6.447-23.945 0-6.612 6.447-6.612 16.9 0 23.347 6.107 5.953 15.717 6.409 22.36 1.366.028.032.058.063.088.093l8.98 8.755a2.155 2.155 0 002.993 0 2.027 2.027 0 000-2.919l-8.98-8.755a2.364 2.364 0 00-.094-.087zM25.91 7.753a12.163 12.163 0 010 17.51c-4.96 4.835-13 4.835-17.959 0a12.164 12.164 0 010-17.51c4.96-4.835 13-4.835 17.959 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
        <input
          className="w-full px-6 py-3 text-lg shadow-input placeholder-orange placeholder-opacity-75 font-play text-orange bg-green-dark focus:outline-none focus:ring focus:ring-blue"
          placeholder="Write your search here..."
          value={search}
          onChange={onChange}
        />
      </div>
    </view>
  );
}
