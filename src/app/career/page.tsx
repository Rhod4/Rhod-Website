import { Divider } from "@nextui-org/react";
import Image from "next/image";
export default function Page() {
  return (
    <div className={"flex justify-center"}>
      <div className={"w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2"}>
        <div className="relative flex justify-center items-center">
          <Image
            src={"/images/career/writemedia-logo.jpg"}
            width={300}
            height={200}
            alt={"writemedia logo"}
            priority
          />
        </div>
        <div className={"mb-5"}>
          <h2 className="text-2xl">Writemedia</h2>
          <div className="mb-2">
            <p>Full Stack Web and Flutter Developer</p>
            <p>Pembroke Dock</p>
            <p>January 2022 to June 2024</p>
          </div>
          <p className={"mb-2"}>
            Writemedia is an agency software development company that develops
            for a number of different companies, including the <b>WRU</b>,
            <b>Create Development</b> and <b>Agrify.Wales</b>. The projects
            range from very old technologies, to more recent ones.
          </p>
          <p>Notable Projects:</p>
          <ul className="list-disc ml-5">
            <li>
              Implemented i18n into one of the APIs to support both Welsh and
              English languages.
            </li>
            <li>
              Refactored a significant MVC SaaS application to meet WCAG 2.0 AA
              accessibility standards.
            </li>
            <li>
              I created a front-end web application for mobile devices, which
              was later needed to be directly replicated in flutter, reusing the
              same API endpoints
            </li>
            <li>
              I have also been part of creating a sales platform for a
              greenfield SaaS app that provides sports education for primary
              school children through an app. Umbraco was integrated into this
              site to allow the user to have a CMS.
            </li>
            <li>
              In one of my personal projects, I used ASP.NET Core Minimal API as
              my API framework, and then NuxtJs with DaisyUi to create the front
              end.
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2">
          <Divider className="my-4"></Divider>
        </div>
        <div className={"mb-5"}>
          <h2 className="text-2xl">BCC IT</h2>
          <p>Service Desk Technician</p>
          <p>Newcastle Emlyn</p>
          <p className="mb-2">October 2021 to December 2021</p>
          <p>
            BCC IT is an IT support business for businesses While working at BCC
            IT I was on the service desk, this meant that it was my
            responsibility to create, update and complete any ticket assigned to
            me. My role was to resolve any IT issues a user had, which could
            range from password resets, to trying to investigate more complex
            issues, an example of this would be a trackpad not working.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src={"/images/career/BCCIT-logo.png"}
            width={300}
            height={200}
            alt={"writemedia logo"}
            priority
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <Divider className="my-4"></Divider>
        </div>
        <div className={"mb-10 col-span-1 md:col-span-2"}>
          <h2 className="text-2xl">Summer Jobs</h2>
          <p className="mb-5">
            CSE - Fishguard - June 2018 to September 2019 Summer job, over two
            Summers working at a company called CSE. I also spent a Summer prior
            to working with CSE working in The Royal Oak Fishguard.
          </p>
          <h2 className="text-2xl">Work Experience</h2>
          <p>
            Solva Primary School - Solva 2016 to 2016 For my Welsh Bacc work
            experience I supported in Solva Primary School for a week.
          </p>
        </div>
      </div>
    </div>
  );
}
