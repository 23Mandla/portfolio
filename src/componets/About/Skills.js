import React from "react";

export default function Skills() {
  const languages = ["JavaScript", "PHP", "Java", "HTML/CSS"];
  const framework = ["React js", "Next js", "Express js"];
  const database = ["Mongodb", "myphpadmin"];

  return (
    <div className="grid grid-cols-3 text-[#313030] p-8 pt-24 ">
      <div className="relative">
        <h1 className="font-bold w-full text-center text-4xl p-5 pl-10">MY SKILLS</h1>
        <div className="absolute w-[29rem] ml-3 left-[10%] h-[65%] top-[23%] bg-[#e6e5e5] p-5 text-sm">
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
          <div className="pt-5">
            <ul className="space-y-5">
              <h1 className="text-lg">Database</h1>
              {database.map((database) => (
                <li key={database}>{database}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-2 p-16 bg-[#a7a7a7]">
        <div className="w-[80%] pr-5 float-right h-full bg-[#f5f2ef] p-12 space-y-10 text-sm">
          <p>
            I possess strong proficiency in HTML, CSS (including SCSS and
            Tailwind CSS), and JavaScript, enabling me to create creative and
            user-friendly web applications.
          </p>
          <p>
            I have the ability to establish connections between web applications
            and web servers using PHP and/ create Node/Express.js applications.
          </p>
          <p>
            In addition to frontend, I can also leverage the powers of usable
            components with react. I can work with Next.js providing server-side
            rendering, static site generation, and routing capabilities.
          </p>
          <p>
            Upon completion of the design and programming phase, I am proficient
            in integrating your application with the database, MongoDB or myphpadmin.
          </p>
        </div>
      </div>
    </div>
  );
}
