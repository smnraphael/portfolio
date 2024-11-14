function CertificationCard({ course, school, time, link }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-stone-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <p className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
        {course}
      </p>
      <p className="dark:text-white mb-2">{school}</p>
      <div className="mb-2">
        <a
          href={link}
          target="_blank"
          className="text-sm text-purple-700 dark:text-lime-400 hover:underline"
        >
          View certifcate
        </a>
      </div>
      <p className="block text-xs text-gray-400 dark:text-gray-500">{time}</p>
    </div>
  );
}

export default CertificationCard;
