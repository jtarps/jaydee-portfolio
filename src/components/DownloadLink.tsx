"use client";

export default function DownloadLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-resume-modal'));
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="inline-flex items-center mt-4 text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
    >
      download my resume →
    </a>
  );
}
