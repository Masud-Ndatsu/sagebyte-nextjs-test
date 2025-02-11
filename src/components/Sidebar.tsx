"use client";
import { FaArrowLeft } from "react-icons/fa";
interface ResponsiveStateProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  setIsMobile: (value: boolean) => void;
  setIsMenuOpen: (value: boolean) => void;
}
const Sidebar = ({}: ResponsiveStateProps) => {
  return (
    <div className={"flex-1 bg-white text-gray-800 py-8 px-5 border-r-2"}>
      <div className="">
        <button className="flex items-center gap-2 py-2 my-4 text-lg text-blue-600 font-semibold">
          <FaArrowLeft className="text-sm" /> <span>Back to Dashboard</span>
        </button>
        <h2 className="font-bold text-2xl max-w-[200px] my-2">
          Let&apos;s create your new campaign:
        </h2>

        <p>
          Follow the following steps to setup an effective and successful
          campaign strategy:
        </p>
      </div>

      <ul className="steps steps-vertical my-6">
        <li
          data-content="?"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Define company objective
        </li>
        <li
          data-content="!"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Map funnel stages
        </li>
        <li
          data-content="✓"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Select channel mix
        </li>
        <li
          data-content="✕"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Formats selection
        </li>
        <li
          data-content="★"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Set buy objectives and types
        </li>
        <li
          data-content=""
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Plan campaign schedule
        </li>
        <li
          data-content="●"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Configure and set budget
        </li>
        <li
          data-content="✓"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Establish goals
        </li>
        <li
          data-content="★"
          className="step step-neutral flex gap-3 items-center py-2 text-md text-gray-500"
        >
          Overview of your campaign
        </li>
      </ul>

      <p className="text-[12px] italic">
        This screen, all the other ones, as well as the system they build
        together are protected by copyright @ - all use, display, and other
        rights are exclusively reserved to Eurekads Pte. Ltd.
      </p>
    </div>
  );
};

export default Sidebar;
