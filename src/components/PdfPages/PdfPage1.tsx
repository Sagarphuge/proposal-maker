import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";

const PdfPage1 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
  ({ formInputs }, ref) => {
    return (
      <div ref={ref} className="flex h-[1700px] text-xl flex-col text-neutral-900 justify-between">
        <div className="h-full px-10">
          <div className="flex h-full flex-col border-s ps-12">
            <div className="mt-10">
              <Logo />
            </div>
            <div className="relative mt-60 capitalize ps-2  text-9xl font-black">
              {formInputs.proposalType}
              {(() => {
                const { proposalType } = formInputs;
                const proposalTextMap = {
                  AdGenX: "AI-Powered Google Ads",
                  LeadGenX: "AI-Powered Google Ads",
                  LeadTitanX: "AI-Powered Google Ads",
                  "Agent PRO": "AI-Powered Work Force",
                  "Agent ESSENTIAL": "AI-Powered Work Force",
                  "Agent LIVE": "AI-Powered Work Force",
                };
                const displayText = proposalTextMap[proposalType];
                return displayText ? (
                  <p className="text-6xl font-bold mt-20">{displayText}</p>
                ) : null;
              })()}
              {(() => {
                const { proposalType } = formInputs;
                const group1 = ["LeadGenX", "AdGenX", "LeadTitanX", "Agent PRO", "Agent LIVE"];
                const group2 = ["PropGenX", "HealthGenX"];
                const group3 = ["Agent ESSENTIAL"];
                let dynamicClasses = "";
                if (group1.includes(proposalType)) {
                  dynamicClasses = "h-80 top-10";
                } else if (group2.includes(proposalType)) {
                  dynamicClasses = "-top-10 h-96";
                } else if (group3.includes(proposalType)) {
                  dynamicClasses = "h-[28rem] top-8";
                }
                return (
                  <div className={`absolute -left-12 w-3 bg-gradient-to-br from-green-500 to-blue-400 ${dynamicClasses}`}></div>
                );
              })()}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 gap-y-20 bg-slate-200 p-16 pb-28 ps-24">
          <div className="col-span-12">
            <p className="text-2xl">Prepared for</p>
            <p className="text-5xl  font-bold">{formInputs.companyName}</p>
          </div>
          <div className="col-span-5">
            <p className="text-2xl">Presented by</p>
            <p className="text-3xl mt-2 font-bold">INAIWAYS TECHNOLOGY</p>
          </div>
          <div className="col-span-4">
            <p className="text-2xl">Date of proposal</p>
            <p className="text-3xl mt-2 font-bold">
              {new Date(formInputs.proposalDate).toLocaleDateString('en-GB')}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-2xl">Valid up to</p>
            <p className="text-3xl mt-2 font-bold">
              {new Date(formInputs.validityDate).toLocaleDateString('en-GB')}
            </p>
          </div>
          <div className="col-span-12">
            <p className="text-2xl">sales@inaiways.com</p>
            <p className="text-3xl mt-2 font-bold">9272091304</p>
          </div>
        </div>
      </div>
    );
  });

export default PdfPage1;
