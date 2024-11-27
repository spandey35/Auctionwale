import Image from "next/image";

const SingleTestimonial = ({ testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = Array(star).fill(
    <span className="text-yellow">★</span>, // Simplified star icon
  );

  return (
    <div className="w-full max-w-md rounded-md bg-white p-4 shadow-lg dark:bg-dark">
      <div className="flex h-full flex-col justify-between space-y-4">
        {/* Ratings */}
        <div className="flex items-center space-x-1">{ratingIcons}</div>

        {/* Content with fixed height to avoid variable lengths */}
        <div className="flex-grow">
          <p className="text-base leading-relaxed text-body-color dark:text-white">
            {content}
          </p>
        </div>

        {/* Border line */}
        <div className="my-2 border-t border-gray-200 dark:border-gray-600"></div>

        {/* Name and Image */}
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
