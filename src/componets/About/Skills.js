import React from "react";

export default function Skills() {
  const languages = ["JavaScript", "PHP", "Java", "HTML/CSS"];
  const framework = ["React js", "Next js", "Express js"];
  const database = ["Mongodb", "myphpadmin"];

  return (
    <div className="relative  h-screen p-16">
      <h1 className="relative text-4xl pl-5 top-12 float-left left-10">
        My skills
      </h1>
      <div className="bg-[#dfdfdf] relative w-[70%] h-full p-10 float-right ">
        <div className="m-auto w-[83%] h-full p-12 space-y-8 bg-[#c7c3c0]  text-[#4A4A4A] text-sm">
          <p>
            I'm Mandla Mbolekwa, final year student at Unisa and a software
            developer with a passion for creating and developing web and mobile
            applications. I have a strong interest in software and web
            development.
          </p>
          <p>
            In addition to formal education, I have proactively pursued personal
            development opportunities including learning beyond formal education
            and completing a certificate in programming from Udacity
          </p>
          <p>
            I am currently seeking an internship, entry-level, or part-time
            opportunity where I can demonstrate my programming skills and gain
            hands-on experience.
          </p>
        </div>

        <div className="absolute w-[55%] ml-3 -left-[45%] h-auto top-[33%] bg-[#dfdfdf] p-5 text-sm">
          <div className="grid grid-cols-2">
            <ul className="space-y-5 mt-5">
              <h1 className="text-lg">languages</h1>
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <ul className="space-y-5 mt-5 pl-10">
              <h1 className="text-lg">Framework</h1>
              {framework.map((framework) => (
                <li key={framework}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="pt-3">
            <h1 className="text-lg">Database</h1>
            <ul className="space-y-4 flex flex-row gap-4 items-center">
              {database.map((database) => (
                <li className="flex items-center" key={database}>{database}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
