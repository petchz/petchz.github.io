import React from "react";
import { GITHUB_USERNAME, LINKEDIN_USERNAME } from "../data/root.link";
const Contact = () => {
  return (
    <section className="my-14" id="contact">
      <div className="text-center">
        <div className="flex flex-row flex-wrap">
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
