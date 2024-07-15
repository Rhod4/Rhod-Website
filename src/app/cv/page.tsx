export default function Page() {
    return <div className={"flex h-full pt-5 flex-col items-center"}>
        <a className={"w-full sm:w-2/3 xl:w-1/2 flex justify-center border rounded-lg py-4 bg-gray-500 hover:bg-gray-600 transition-all mb-10"} href="/Rhodri-Smith-CV.pdf" download>Download CV</a>
    
        <embed src="/Rhodri-Smith-CV.pdf" className="mb-10" width="80%" height="1000px" />
    </div>
}