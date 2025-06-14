import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";


const PdfPage17 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div id="4" ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">5</div>
            <div className="h-full px-10">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-40 w-3 bg-gradient-to-br from-green-500 to-cyan-400"></div>
                        <p className="text-3xl">
                            AI-Agents Work Force - Plans
                        </p>
                        <p className="text-7xl font-black">Feature List</p>
                    </div>
                    <div className="grid gap-1 grid-cols-12">
                        <div className="col-span-8 grid h-16 place-content-center  bg-neutral-900 text-white text-lg font-semibold">
                            <p className="-mt-5">
                                FEATURE LIST
                            </p>
                        </div>
                        <div className="col-span-2 grid h-16 place-content-center   bg-neutral-900 text-white text-lg font-semibold uppercase">
                            <p className="-mt-5">ESSENTIALS</p>
                        </div>
                        <div className="col-span-1 grid h-16 place-content-center   bg-neutral-900 text-white text-lg font-semibold uppercase">
                            <p className="-mt-5">PRO</p>
                        </div>
                        <div className="col-span-1 grid h-16 place-content-center   bg-neutral-900 text-white text-lg font-semibold uppercase">
                            <p className="-mt-5">LIVE</p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Answers Common Questions Instantly:
                            </p>
                            <p className="text-lg -mt-4">Trained on FAQ's, Collateral, Pricing Details shared by customers.
                                In short information which is frequently not changed. (Frequency
                                for 1 Year)
                            </p>
                        </div>
                        <div className="col-span-2  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Instant Call Summaries:
                            </p>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Sends call summaries on Slack, WhatsApp, Email Only
                            </p>
                        </div>
                        <div className="col-span-2  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50   text-center  place-content-center ps-3 ">
                            <p className=" text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className=" text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Send call summaries on Known Tools
                            </p>
                        </div>
                        <div className="col-span-2  place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className=" text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Send call summaries on Custom Application (Additional Cost
                                Applicable)

                            </p>
                        </div>
                        <div className="col-span-2  place-content-center  text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1   place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Guided Conversations:
                            </p>
                            <p className="text-lg -mt-4">
                                Trained on Cases and Questions Answers Provided by you

                            </p>
                        </div>
                        <div className="col-span-2  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className=" text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1  place-content-center bg-green-50 text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Collect Data from Customer:
                            </p>
                            <p className="text-lg -mt-4">

                                Trained on data fields to be collected while having conversation
                                with customers. (up to 10 fields) <br />
                                Note: Name, Email_id, Phone No, to be collected from Web
                                Forms for better accuracy

                            </p>
                        </div>
                        <div className="col-span-2 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Handles Incoming Calls:
                            </p>
                            <p className="text-lg -mt-4">
                                Can answer customer phone calls
                                automatically.


                            </p>
                        </div>
                        <div className="col-span-2 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Remembers Past Conversations:

                            </p>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Maintain Conversation History in Known Tools
                            </p>
                        </div>
                        <div className="col-span-2 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Maintain Conversation History in Custom Application
                                (Additional Cost Applicable)

                            </p>
                        </div>
                        <div className="col-span-2 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Looks Up Data When Needed                            </p>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Fetch Data from Known Tools
                            </p>
                        </div>
                        <div className="col-span-2 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Fetch Data from Custom Application (Additional Cost Applicable)
                            </p>
                        </div>

                        <div className="col-span-2 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 place-content-center text-center ps-3 ">
                            <p className="text-lg">No
                            </p>
                        </div>

                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="font-bold text-lg">Language Support
                            </p>
                        </div>
                        <div className="col-span-2"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">English Only
                            </p>
                        </div>

                        <div className="col-span-2 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-8 bg-cyan-50 grid   ps-3">
                            <p className="text-lg">Supported Languages (Multiple Languages- Max 3 Per Agent)
                            </p>
                        </div>
                        <div className="col-span-2    place-content-center text-center ps-3  ">
                            <p className="text-lg">No
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
                        </div>
                        <div className="col-span-1 bg-green-50  place-content-center text-center ps-3 ">
                            <p className="text-lg">Yes
                            </p>
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

export default PdfPage17;