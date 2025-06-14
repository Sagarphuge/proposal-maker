import React from "react";
import WhiteLogo from "../WhiteLogo";
import { ProposalType } from "../../schema/schema";
const PdfPage2 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
  ({ formInputs }, ref) => {
    const deliverablesPage = {
      AdGenX: 6,
      PropGenX: 5,
      LeadTitanX: 6,
      HealthGenX: 5,
      LeadGenX: 6,
      "Agent PRO": 7,
      "Agent LIVE": 7,
      "Agent ESSENTIAL": 7
    };

    const executionPlanPage = {
      AdGenX: 9,
      PropGenX: 8,
      LeadTitanX: 9,
      HealthGenX: 8,
      LeadGenX: 9,
      "Agent PRO": 9,
      "Agent LIVE": 9,
      "Agent ESSENTIAL": 9
    };

    const termsPage = {
      AdGenX: 11,
      PropGenX: 11,
      LeadTitanX: 12,
      HealthGenX: 11,
      LeadGenX: 12,
      "Agent PRO": 13,
      "Agent LIVE": 13,
      "Agent ESSENTIAL": 13
    };

    const escalationPage = {
      AdGenX: null,
      PropGenX: 14,
      LeadGenX: 15,
      LeadTitanX: 15,
      HealthGenX: 14,
      "Agent PRO": 15,
      "Agent LIVE": 15,
      "Agent ESSENTIAL": 15
    };

    return (
      <div ref={ref} className="relative h-[1700px] bg-[#272521] text-xl text-white">
        <div className="h-full ps-10 pe-48">
          <div className="h-full border-s ps-12">
            <div className="pt-10">
              <div className="w-fit rounded-xl bg-white">
                <WhiteLogo />
              </div>
            </div>

            <div className="my-16">
              <div className="mt-2 mb-12 text-8xl font-black">
                {["LeadGenX", "AdGenX"].includes(formInputs.proposalType) ? "Index" : "Agenda"}
              </div>

              <div className="mt-36 max-w-4xl">
                <div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                  <div className="mt-4 mb-14 flex justify-between items-center">
                    <p className="text-4xl">Business Requirement</p>
                    <p className="text-2xl">3</p>
                  </div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                </div>

                <div>
                  <div className="mt-4 mb-14 flex justify-between items-center">
                    <p className="text-4xl">Commercials</p>
                    <p className="text-2xl">4</p>
                  </div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                </div>

                <div>
                  <div className="mt-4 mb-14 flex justify-between items-center">
                    <p className="text-4xl">Deliverables</p>
                    <p className="text-2xl">{deliverablesPage[formInputs.proposalType]}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                </div>

                <div>
                  <div className="mt-4 mb-14 flex justify-between items-center">
                    <p className="text-4xl">Execution Plan</p>
                    <p className="text-2xl">{executionPlanPage[formInputs.proposalType]}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                </div>

                <div>
                  <div className="mt-4 mb-14 flex justify-between items-center">
                    <p className="text-4xl">Terms & Conditions</p>
                    <p className="text-2xl">{termsPage[formInputs.proposalType]}</p>
                  </div>
                  <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                </div>

                {["LeadGenX", "LeadTitanX", "PropGenX", "HealthGenX", "Agent PRO", "Agent LIVE", "Agent ESSENTIAL"].includes(formInputs.proposalType) && (
                  <div>
                    <div className="mt-4 mb-14 flex justify-between items-center">
                      <p className="text-4xl">Escalation Matrix</p>
                      <p className="text-2xl">{escalationPage[formInputs.proposalType]}</p>
                    </div>
                    <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default PdfPage2;
