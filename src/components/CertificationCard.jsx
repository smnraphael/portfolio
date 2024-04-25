function CertificationCard({ course, school, date, link }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-stone-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {course}
      </p>
      <p>{school}</p>
      <a
        href={link}
        target="_blank"
        className="text-sm text-blue-500 hover:underline"
      >
        View certifcate
      </a>
      <p className="block text-xs text-gray-400 dark:text-gray-500">{date}</p>
    </div>
  );
}

export default CertificationCard;
