import { WorkExperiencesTypes } from "@/types/workExperiencesTypes"

export const workExperiences: WorkExperiencesTypes[] = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        description: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
      },
      {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        description: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
      },
      {
        id: 3,
        title: "Freelance App Dev Project",
        description: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
      },
      {
        id: 4,
        title: "Lead Frontend Developer",
        description: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
      },
]