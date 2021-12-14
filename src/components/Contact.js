import React from "react";
import {
  ADDRESS,
  EMAIL_ID,
  FIRST_NAME,
  GITHUB_USERNAME,
  LAST_NAME,
  LINKEDIN_USERNAME,
} from "../data/root.link";
const Contact = () => {
  return (
    <section className="my-28" id="contact">
      <header className="px-5 text-2xl font-bold pt-10 text-center">
        <h2>Contact</h2>
        <p className="text-base font-thin">
          Want to contact me and get to know more?
        </p>
      </header>
      <div className="my-5 text-center">
        <div>
          <p className="font-bold">
            {FIRST_NAME} {LAST_NAME}
          </p>
          <p className="font-thin">based in {ADDRESS}</p>
          <a
            href={`mailto: ${EMAIL_ID}`}
            className="border-b-2 mt-3 inline-block border-gray-500"
          >
            {EMAIL_ID}
          </a>
        </div>
        <div className="flex flex-row flex-wrap mt-7 justify-center">
          <div className="mx-4">
            <a
              href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                <img
                  src="./images/icons/linkedin.svg"
                  alt=""
                  width="24px"
                  height="24px"
                  className="mr-1"
                />
                LinkedIn
              </span>
            </a>
          </div>

          <div className="mx-4">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                <img
                  src="./images/icons/github.svg"
                  alt=""
                  width="24px"
                  height="24px"
                  className="mr-1"
                />
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
