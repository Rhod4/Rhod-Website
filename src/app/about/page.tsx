import React from "react";

export default function Page() {
    return <div className={"flex justify-center"}>
      <div className={"w-1/3"}>
        <p className={"mb-5"}>
          My name is Rhodri Smith and I am a software developer from South West Wales, Pembrokeshire to be precise.
        </p>
        <p className={"mb-5"}>
          I am a software developer with over 2 years of experience, currently working at Writemedia. Within this role, I work on front-end, backend and mobile development. 
          Front-end websites are my main skill, with my aim to always create high-quality user experience, while always keeping a modern UI approach.
        </p>
        <p>
          Key Skills:
        </p>
          <ul className={"list-disc ml-5 pb-5"}>
            <li>
              Front-end development using the Vue framework 
            </li>
            <li>
              ASP.NET MVC and Minimal API to build web APIs
            </li>
            <li>
              Database manipulation with EF Core and SQL queries
            </li>
            <li>     
              Mobile development with Flutter 
            </li>
            <li>
              Umbraco experience in creating customer-controllable websites
            </li>
            <li>
              Experience working in a team-based environment that follows a scrum-like approach
            </li>   
            <li>
              Knowledge and experience of using TTD when developing new technologies
            </li>
        </ul>

        <p className={"mb-5"}>
          Other projects that I have worked on include MVC projects. Using MVC, I have worked on projects that follow the MVC framework directly, but also ones that use its controller-based approach to create APIs.
          In my most recent project, I've looked into using ASP.NET Core Minimal API as my API framework, and then Vue with DaisyUi to create the front end. In this, I have used plugins to work with the Vue framework, such as Vuelidate, giving me easy access to form validation. 

          In 2020 I completed a 3-year Computer Science degree course at Aberystwyth University, in which I was awarded a 2.2 degree. 
        </p>
        <p>
          I have spent 15 years as part of Sea Cadets, 8 as a cadet, and 7 years as a voluntary staff member and I am 
          still actively involved with the organization. During my time in Sea Cadets, I have gained a vast amount of 
          different skills and knowledge, including leading, teaching and being an effective team member. Through Sea 
          Cadets, I have recently obtained my RYA PBI, which allows me to teach powerboating with and outside of 
          cadets. 
          I am a Welsh speaker who takes great pride in my work, and I am passionate to further my experience and 
          skills in my role of a software developer 
        </p>
        
      </div>
    </div>
  }