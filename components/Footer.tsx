"use client";

import { FaLocationArrow, FaFileLines, FaGithub, FaLinkedin } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useLanguage } from "@/context/LanguageContext";

const RESUME_URL = "/Lucas%20Pilati%20do%20Nascimento.pdf";

const Footer = () => {
  const { t } = useLanguage();
  const footer = t("footer") as { ctaTitle: string; ctaHighlight: string; ctaTitleEnd: string; ctaSubtext: string; button: string; resumeTitle: string; copyright: string };
  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden" id="contact">
      <div className="absolute left-0 bottom-0 w-full min-h-96 pointer-events-none" aria-hidden>
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50 object-cover object-bottom"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {footer.ctaTitle} <span className="text-purple">{footer.ctaHighlight}</span> {footer.ctaTitleEnd}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {footer.ctaSubtext}
        </p>
        <MagicButton
          title={footer.button}
          icon={<FaLocationArrow />}
          position="right"
          href="mailto:pilatidev1@gmail.com"
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {footer.copyright}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia && socialMedia.map((info: { id: number, img: string, link: string }) => {
            const isGitHub = info.link.includes("github");
            const Icon = isGitHub ? FaGithub : FaLinkedin;
            return (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                title={isGitHub ? "GitHub" : "LinkedIn"}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-white-200 hover:text-purple hover:border-purple/50 transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={footer.resumeTitle ?? "Resume"}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-white-200 hover:text-purple hover:border-purple/50 transition-colors"
          >
            <FaFileLines size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
