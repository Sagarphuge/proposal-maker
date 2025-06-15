import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";

const PdfPage18 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">
                6
            </div>
            <div className="h-full px-10 ">
                <div className="h-full flex flex-col pb-16 justify-between border-s px-10">
                    <div>
                        <div className="pt-10">
                            <Logo />
                        </div>
                        <div className="relative mt-10 mb-24">
                            <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                            <p className="text-3xl">AI-Agents Work Force - Plans
                            </p>
                            <p className="text-7xl font-black">Other Charges</p>
                        </div>
                        <div className="grid gap-1 grid-cols-12">
                            <div className="col-span-1 grid h-16 place-content-center  bg-neutral-900 text-white text-lg font-semibold">
                                <p className="-mt-5">
                                    SR.NO
                                </p>
                            </div>
                            <div className="col-span-7 grid h-16 place-content-center   bg-neutral-900 text-white text-lg font-semibold uppercase">
                                <p className="-mt-5">PARTICULARS</p>
                            </div>
                            <div className="col-span-4 grid h-16 place-content-center   bg-neutral-900 text-white text-lg font-semibold ">
                                <p className="-mt-5">AMOUNT (Without Taxes)</p>
                            </div>
                            <div className="col-span-1  place-content-center bg-cyan-50 text-center ps-2 pt-4 pb-8">
                                <p className="-mt-5">
                                    1
                                </p>
                            </div>
                            <div className="col-span-7   bg-cyan-50  ps-3 pt-4 pb-8">
                                <p className="font-bold text-xl">        Expert Support/ Development Customisation
                                </p>
                                <p className="text-lg ">
                                    Expert Support required for any additional changes after one year and hrs over an above included in AMC
                                </p>
                            </div>
                            <div className="col-span-4 text-center grid place-content-center bg-green-50 pt-4 pb-8  ps-3 ">
                                <div className="text-center">

                                    <p className="font-bold text-xl"> INR 5.5K Per Hr
                                    </p>
                                    <p className="">{formInputs.proposalType === "Agent LIVE" ? "[25LIV104] " : formInputs.proposalType === "Agent PRO" ? "[25PRO104] " : "[25ESS104] "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p> <span className="font-semibold">Note : </span> Telephone, WhatsApp, Email and Dialer Services charges at actuals or Your Cost.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    })

export default PdfPage18;