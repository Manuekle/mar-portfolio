import React from 'react';
import { Link } from 'react-router-dom';
import PdfViewer from '../Components/PdfViewer';
import DownloadButton from '../Components/DownloadButton';

function ProjectsPage() {
  return (
    <section className="py-20 flex justify-center items-start">
      <div>
        <h1 className="font-bold text-4xl text-black pb-10 underline">
          my projects
        </h1>
        <span className="flex flex-col gap-8 font-bold text-md lowercase">
          <li>
            web 1.0 - october 7, 2024
            <p className="font-light text-md py-8">
              We had to present an app of web 1.0 that contibute in the field of
              education.
            </p>
            <a
              href="https://view.genially.com/66eef3953106b87fc6c6c1cd/personal-branding-correo-electronico"
              className="underline text-blue-600"
              target="_ blank"
              rel="noreferrer"
            >
              show presentation
            </a>
          </li>
          <hr className="border-2 bg-black h-1" />
          <li>
            1st mid term - september 10, 2024
            <p className="font-light text-md py-8">
              We had to design a class according to the ISTE standards.
            </p>
            <DownloadButton
              fileUrl="/Docs/1ST.docx"
              fileName="1st-mid-term.docx"
            />
          </li>
          <hr className="border-2 bg-black h-1" />
          <li>
            2nd mid term - october 21, 2024
            <p className="font-light text-md py-8">
              We had to plan 3 different activities to explain a particular
              grammar content through technology.
            </p>
            <DownloadButton
              fileUrl="/Docs/2ND.docx"
              fileName="2nd-mid-term.docx"
            />
          </li>
          <hr className="border-2 bg-black h-1" />
          <li>
            samr model activity - august 26, 2024
            <p className="font-light text-md py-8">
              We had to plan an activity with modal verbs classifying the SAMR
              Model and adapting it.
            </p>
            <PdfViewer pdfUrl="Docs/SAMR.pdf" />
          </li>
          <hr className="border-2 bg-black h-1" />
          <li>
            plb - september 02, 2024
            <p className="font-light text-md py-8">
              We had to create an activity for kindergarden with "Project Based
              Learning".
            </p>
            <PdfViewer pdfUrl="Docs/PBL.pdf" />
          </li>
          <hr className="border-2 bg-black h-1" />
          <li>
            poster - september 02, 2024
            <p className="font-light text-md py-8">
              In this activity we had to design a poster where as teacher
              applied the SAMR Model to an activity.
            </p>
            <PdfViewer pdfUrl="Docs/POSTER.pdf" />
          </li>
        </span>
        <Link
          to="/"
          className="underline text-blue-600 flex justify-center font-bold text-lg py-8"
        >
          go back
        </Link>
      </div>
    </section>
  );
}

export default ProjectsPage;
