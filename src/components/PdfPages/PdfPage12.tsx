import React from "react";
import WhiteLogo from "../WhiteLogo";
import { ProposalType } from "../../schema/schema";

const PdfPage12 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative bg-[#272521] text-lg text-white">
            <div className="absolute top-6 right-6">
                {["AdGenX", "PropGenX", "HealthGenX"].includes(formInputs.proposalType)
                    ? 11
                    : ["Agent PRO", "Agent LIVE", "Agent ESSENTIAL"].includes(formInputs.proposalType)
                        ? 13
                        : 12}
            </div>

            <div className="h-full ps-10 pe-48">
                <div className="flex h-full flex-col justify-between border-s ps-12">
                    <div className="pt-10">
                        <div className="w-fit rounded-xl bg-white ">
                            <WhiteLogo />
                        </div>
                    </div>
                    <div className="-mt-48">
                        <div className="h-1 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <div className="mt-4 text-7xl font-black">
                            Terms and Conditions
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    })

export default PdfPage12;