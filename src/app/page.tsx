import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="grid grid-cols-2 justify-between">
        <div className="flex flex-col my-auto">
          <p className="mb-4">
            My name is Rhodri Smith and I am a software developer from South West Wales, Pembrokeshire to be precise.
          </p>
          <p>
            I built this website to show off who I am, where I have worked and what I have worked on. 
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
