"use client";
import Image from "next/image";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import styles from './styles.module.css';


export default function () {
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
              images: [
                {
                  name: "Refs App Main Page",
                  imageUrl: "/images/wru-refs/Refs.jpg",
                },
                {
                  name: "Refs Submit Score",
                  imageUrl: "/images/wru-refs/Refs-Submit-Score.jpg",
                },
                {
                  name: "Refs League Fixture",
                  imageUrl: "/images/wru-refs/RefsLeague-fixture.jpg",
                },
              ],
            },
            {
              name: "Teamsheets",
              langauge: "Flutter, Dart. .Net",
              images: [
                {
                  name: "Teamsheet Home English",
                  imageUrl: "/images/wru-teamsheets/RefsHome-eng.jpg",
                },
                {
                  name: "Teamsheet Home English",
                  imageUrl: "/images/wru-teamsheets/RefsHome-cy.jpg",
                },
                {
                  name: "Teamsheet Fixtures",
                  imageUrl: "/images/wru-teamsheets/Fixtures.jpg",
                },
                {
                  name: "Teamsheet Announcements",
                  imageUrl: "/images/wru-teamsheets/TeamsheetAnnouncements.png",
                },
                {
                  name: "Teamsheet Home English",
                  imageUrl: "/images/wru-teamsheets/TeamsheetFixture-submit-teamsheet-top.png",
                },
                {
                  name: "Teamsheet Home English",
                  imageUrl: "/images/wru-teamsheets/TeamsheetFixture-submit-teamsheet-bottom.png",
                }
              ],
            },
          ],
        },
        {
          name: "Agrify.Wales",
          langauge: "HTML, Vue, Nuxt, .Net, Minimal API",
          projects: [
            {
              name: "Agrify Project",
              images: [
                {
                  name: "Agrify Show Page",
                  imageUrl: "/images/agrify/Agrify-show-page.png",
                },
                {
                    name: "Agrify Please Login PopUp",
                    imageUrl: "/images/agrify/Agrify-please-login.png",
                },
                {
                    name: "Agrify Login Page",
                    imageUrl: "/images/agrify/agrify-login.png",
                },
                {
                    name: "Agrify Register Page",
                    imageUrl: "/images/agrify/Agrify-register.png",
                }
              ],
            },
          ],
        },
        {
          name: "Umbraco",
          langauge: undefined,
          projects: [
            {
              name: "MHPA",
              images: [
                {
                  name: "Bursts",
                  imageUrl: "/images/umbraco/Bursts.png",
                },
                {
                  name: "MHPA Area Map",
                  imageUrl: "/images/umbraco/MHPA-map.png",
                },
                {
                  name: "MHPA Weather Page",
                  imageUrl: "/images/umbraco/MHPA-weather.png",
                }
              ],
            },
          ],
        },
        {
          name: "Create Development",
          langauge: "HTML, Vue, Nuxt, .Net, Minimal API, Angular.js",
          projects: [
            {
              name: "Wheel",
              images: [
                {
                  name: "Lesson Starter",
                  imageUrl: "/images/wru-refs/Refs.jpg",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.tab}>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" items={portfolio} variant="underlined">
          {(company) => (
            <Tab key={company.name} title={company.name} className="tab">
              <Tabs aria-label="Options" items={company.customer} variant="underlined">
                {(customer) => (
                  <Tab key={customer.name} title={customer.name} className="tabs">
                    <Tabs aria-label="Options" items={customer.projects} variant="underlined">
                      {(projects) => (
                        <Tab key={projects.name} title={projects.name}>
                          <Card className={"bg-gray-700"}>
                            <CardBody>
                              <div className={"mx-5"}>
                                <h4>{projects.name}</h4>
                                <div
                                  className={
                                    "grid grid-cols-4 gap-2 justify-items-center"
                                  }
                                >
                                  {projects.images.map((image) => (
                                    <Image
                                      src={image.imageUrl}
                                      width={150}
                                      height={20}
                                      alt={image.name}
                                    />
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
  );
}
