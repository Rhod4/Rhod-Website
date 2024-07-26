import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
        <div className="flex flex-col my-auto mb-5 sm:mb-0">
          <p className="mb-4 text-center">
            My name is Rhodri Smith and I am a software developer from South West Wales, Pembrokeshire to be precise.
          </p>
          <p className="text-center">
            This website is built using React with Next.js, a library and framework that I have never used before. The site was built to
            showcase the projects that I have worked on within my career and personal time. The website is also hosted on netlify and
            is linked to my Git repository for continuous deployment (github.com/Rhod4/Rhod-Website)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col border border-gray-400 rounded-xl p-4">
          <h2 className="text-xl mb-2 mx-auto">
            Repository: <a href="https://github.com/Rhod4" target="blank">github.com/Rhod4</a>
          </h2>
          <h2 className="text-xl mb-2 mx-auto">
            LinkedIn: <a href="https://www.linkedin.com/in/rhodri-smith-4b0488176/" target="blank">www.linkedin.com</a>
          </h2>
          <p className="mx-auto">OR</p>
          <h2 className="text-xl mx-auto">
            Contact: Rhodrigsmith@Gmail.com
          </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
