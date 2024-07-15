"use client";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody, Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import tab from './tab.module.css';
import screenshot from './screenshot.module.css';


export default function Page() {
  const portfolio = [
    {
      name: "Writemedia",
      customer: [
        {
          name: "WRU",
          projects: [
            {
              name: "Refs App",
              langauge: "Flutter, Dart. .Net",
              link: "",
              desciption: `The WRU Refs app is what all the WRU referees use to submit details about games. These features include, disciplines and  
              scores. The referees can also claim matches that they want to be able to referee. Originally, the app required users to take a photo of a physical
              teamsheets/scoresheet and submit them, however, the teamsheet app removed that requirment. Referees can also view teamsheets that were submited
              on the teemsheet app.`,
              images: [
                {
                  name: "Refs App Main Page",
                  imageUrl: "/images/wru-refs/Refs.jpg",
                  imageSize: 350
                },
                {
                  name: "Refs Submit Score",
                  imageUrl: "/images/wru-refs/Refs-Submit-Score.jpg",
                  imageSize: 350
                }
              ],
            },
            {
              name: "Teamsheets",
              langauge: "Flutter, Dart. .Net, Vue",
              link: "",
              desciption: `Teamsheet is an app designed for team managers to be able to submit their teams for up comming games. It also allowed them to view 
              fixtures, add players to their teams and check announcements.
              I was the main front end develoiper for this project and was heavily involded from start to finish. This included building wireframes and desings.
              The original app was built for short term use and was created with the Vue framework. Even though it was built for a short term phase,
              it was always expected to last longer than expected. Within the past year, start on the upgrade in flutter began, this again with me being the main developer. It
              started as a one to one copy, but in flutter, however, with much consideration we moved to a new design`,
              images: [
                {
                  name: "Teamsheet Home English",
                  imageUrl: "/images/wru-teamsheets/RefsHome-eng.jpg",
                  imageSize: 350
                },
                {
                  name: "Teamsheet Home Welsh",
                  imageUrl: "/images/wru-teamsheets/RefsHome-cy.jpg",
                  imageSize: 350
                },
                {
                  name: "Teamsheet Fixtures",
                  imageUrl: "/images/wru-teamsheets/Fixtures.jpg",
                  imageSize: 350
                },
                {
                  name: "Teamsheet Announcements",
                  imageUrl: "/images/wru-teamsheets/TeamsheetAnnouncements.png",
                  imageSize: 350
                },
                {
                  name: "Teamsheet Submit Teamsheet",
                  imageUrl: "/images/wru-teamsheets/TeamsheetFixture-submit-teamsheet-top.png",
                  imageSize: 350
                },
                {
                  name: "Teamsheet Front Row Cover Submit",
                  imageUrl: "/images/wru-teamsheets/TeamsheetFixture-submit-teamsheet-bottom.png",
                  imageSize: 350
                },
                {
                  name: "Teamsheet League Fixture",
                  imageUrl: "/images/wru-refs/RefsLeague-fixture.jpg",
                  imageSize: 350
                },
              ],
            },
          ],
        },
        {
          name: "Agrify.Wales",
          projects: [
            {
              name: "Agrify Project",
              langauge: "HTML, Vue, Nuxt, .Net, Minimal API",
              link: "https://agrify.wales/",
              desciption: `
              Agrify is a sales platform that agricultural shows/events would use to sell tickets,
              this for trade stands and general entry. The site was being built from the ground up, 
              with me being the main front end developer for a time, meaning that I was heavily involved in design meetings.
              `,
              images: [
                {
                  name: "Agrify Show Page",
                  imageUrl: "/images/agrify/Agrify-show-page.png",
                  imageSize: 900
                },
                {
                    name: "Agrify Please Login PopUp",
                    imageUrl: "/images/agrify/Agrify-please-login.png",
                    imageSize: 900
                },
                {
                    name: "Agrify Login Page",
                    imageUrl: "/images/agrify/agrify-login.png",
                    imageSize: 900
                },
                {
                    name: "Agrify Register Page",
                    imageUrl: "/images/agrify/Agrify-register.png",
                    imageSize: 600
                }
              ],
            },
          ],
        },
        {
          name: "Umbraco",
          projects: [
            {
              name: "MHPA",
              langauge: "",
              link: "https://www.milfordwaterfront.co.uk/",
              desciption: `I worked on 4 of the MHPA sites, this work includs completing support tickets and other site upgrades,
              A major support ticket I was involved in was optimising their websites. I also updated their weather page when the old API
              stopped working, this included finding and implementing it`,
              images: [
                {
                  name: "MHPA Area Map",
                  imageUrl: "/images/umbraco/MHPA-map.png",
                  imageSize: 900
                },
                {
                  name: "MHPA Weather Page",
                  imageUrl: "/images/umbraco/MHPA-weather.png",
                  imageSize: 600
                }
              ],
            },
          ],
        },
        {
          name: "Create Development",
          langauge: "HTML, Vue, .Net, Angular.js",
          projects: [
            {
              name: "Wheel",
              langauge: "",
              link: "",
              desciption: `The Wheel is a SaaS app that teachers can use to track their students progress. 
              Students progress is tracked through different means, teachers can manually add progress or
              students can complete quizes. One of the main areas I worked on was the quiz section and
              updating the site to make it WCAG 2.0 AA standards`,
              images: [
                {
                  name: "Wheel",
                  imageUrl: "/images/create-development/wheel.png",
                  imageSize: 1000
                },
                {
                  name: "Lesson Starter Categories",
                  imageUrl: "/images/create-development/lesson-starter-landing.png",
                  imageSize: 1000
                },
                {
                  name: "Lesson Starter Questions",
                  imageUrl: "/images/create-development/lesson-starter-main.png",
                  imageSize: 1000
                },
                {
                  name: "Lesson Starter Question",
                  imageUrl: "/images/create-development/lesson-starter-question.png",
                  imageSize: 1000
                },
                {
                  name: "Lesson Starter Multi-Select",
                  imageUrl: "/images/create-development/lesson-starter-question-multi-select.png",
                  imageSize: 1000
                },
                {
                  name: "Lesson Starter Feedback",
                  imageUrl: "/images/create-development/lesson-starter-feedback.png",
                  imageSize: 1000
                },
              ],
            },
            {
              name: "Bursts",
              langauge: "",
              link: "Link: https://burstsapp.co.uk/",
              desciption: `
              The website is a sales platform for a greenfield SaaS app that provides sports 
              education for primary school children through an app. Umbraco was integrated into this site to allow 
              the user to have a CMS. I was one of the main developers working to create the website
              `,
              images: [
                {
                  name: "Bursts Main Page",
                  imageUrl: "/images/umbraco/Bursts.png",
                  imageSize: 1000
                },
                {
                  name: "Bursts About Us",
                  imageUrl: "/images/umbraco/Bursts-about-us.png",
                  imageSize: 1000
                },
                {
                  name: "Bursts Impact",
                  imageUrl: "/images/umbraco/Bursts-impact.png",
                  imageSize: 1000
                }
              ]
            },
          ],
        },
      ],
    },
    {
      name: "Other",
      customer: [
        {
          name: "Personal",
          projects: [
            {
              name: "Race Project",
              langauge: "Vue, nuxt, HTML, .Net, Minimal API, tailwind",
              link: "",
              desciption: `
                The race project was designed to be a domonstation of my skills within software development, with me being the sole dev.
                The project is desinged to bring the sim racing community under one roof, allowing people to find races and leagues to participate in.
                It is not a small project by any means, however, I choose this to challange myslef. It is also something that does not have many online 
                guides to help, proving that I would not just be following a tutorial
                It uses a cookie based authorisation system. I chose that ove JWT as I have already worked with JWT tokens
              `,
              images: [
                {
                  name: "Landing Page",
                  imageUrl: "/images/personal/race-project/landing-page.png",
                  imageSize: 1400
                },
                {
                  name: "View Upcoming Races page",
                  imageUrl: "/images/personal/race-project/race-page.png",
                  imageSize: 1400
                },
                {
                  name: "Filtered Upcoming Races page",
                  imageUrl: "/images/personal/race-project/race-page-filtered.png",
                  imageSize: 1400
                },
                {
                  name: "Not Logged In Race Modal",
                  imageUrl: "/images/personal/race-project/race-page-popup-nologin.png",
                  imageSize: 600
                },
                {
                  name: "Login",
                  imageUrl: "/images/personal/race-project/race-login.png",
                  imageSize: 600
                },
                {
                  name: "Profile",
                  imageUrl: "/images/personal/race-project/profile.png",
                  imageSize: 1400
                },
                {
                  name: "Dashboard - Create Race",
                  imageUrl: "/images/personal/race-project/dashboard-create-race.png",
                  imageSize: 1400
                },
                {
                  name: "Db Schema (Outdated)",
                  imageUrl: "/images/personal/race-project/dbdiagram-outdated.png",
                  imageSize: 1000
                },
                {
                  name: "You Track issue tracker",
                  imageUrl: "/images/personal/race-project/you-track-issues.png",
                  imageSize: 1400
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  let [selectedImage, setImage] = useState('');
  let [imageSize, setSize] = useState(0);

  function ViewFullImageModal(image: string, size: number) {
    setImage(image)
    setSize(size)
    onOpen()
  }

  return (
    <>
    <div className={tab.tab}>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" items={portfolio} variant="underlined" key={"mainTab"}>
          {(company) => (
            <Tab key={company.name} title={company.name} className="tab">
              <Tabs aria-label="Options" items={company.customer} variant="underlined">
                {(customer) => (
                  <Tab key={customer.name} title={customer.name} className="tabs">
                    <Tabs aria-label="Options" items={customer.projects} variant="underlined">
                      {(project) => (
                        <Tab key={project.name} title={project.name}>
                          <Card className={"bg-gray-700"}>
                            <CardBody>
                              <div className={"mx-5"}>
                                <h4 className={"mb-2"}>{project.name}</h4>
                                <p className={"mb-4"}>{project.desciption}</p>
                                <div
                                  className={
                                    "grid grid-cols-4 gap-2 justify-items-center items-center"
                                  }
                                >
                                  {project.images.map((image) => (
                                    <div className={screenshot.screenshots} key={image.name}>
                                    <Button onClick={() => ViewFullImageModal(image.imageUrl, image.imageSize)}
                                      className={"screenshots relative "}
                                    >
                                      <div className={"absolute h-full w-full flex items-center justify-center"}>
                                      <span className={"justify-center screenshots-text z-20 max-w-full text-wrap"}>
                                        {image.name}
                                      </span>
                                      <div className="absolute w-full h-full fade z-10"></div>
                                      </div>
                                      <Image
                                        src={image.imageUrl}
                                        width={image.imageSize / 2}
                                        height={300}
                                        alt={image.name}
                                        priority
                                        style={{width: image.imageSize / 2, height: 'auto'}}
                                      />
                                    </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </Tab>
                      )}
                    </Tabs>
                  </Tab>
                )}
              </Tabs>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="xl" backdrop="blur"  className="!w-fit !h-auto fixed" hideCloseButton radius={"none"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                  <Image
                  src={selectedImage}
                  alt={selectedImage}
                  width={imageSize}
                  height={550}
                  style={{
                    objectFit: 'contain',
                    maxWidth: 'max-content !important'
                  }}
                  className="!max-w-max"
                  />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
