/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";
import error from "../../public/notfound_images/error.png";

export default function NotFound() {
  return (
    <main className="text-center flex flex-col items-center justify-center h-screen bg-purple-100">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-black-3 mb-4">
        We couldn't find the page you were looking for.
      </p>
      <p className="text-black-3 mb-8">
        Go back to the
        <Link href="/" className="text-secondary underline">
          homepage
        </Link>
      </p>
      <Image
        src={error}
        alt="404 Image"
        className="w-48 h-48 object-cover rounded-full shadow-md mb-8"
      />
      <p className="text-black-3">
        Need assistance? Contact our support team at
        <a
          href="mailto:support@example.com"
          className="text-secondary underline"
        >
          farmfuse@gmail.com
        </a>
      </p>
    </main>
  );
}
