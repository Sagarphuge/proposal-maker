import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";
import Bullet from "../BulletPoint";

const PdfPage19 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">
               8
            </div>
            <div className="h-full px-10 ">
                <div className="h-full  pb-16  border-s px-10">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-24">
                        <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl">Phases
                        </p>
                        <p className="text-7xl font-black">Approach</p>
                    </div>
                    <div className="grid gap-10">
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">1. Requirement Analysis:
                            </div>
                            <div className="ps-12 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Collaborate with Client Name to gather detailed requirements for each role (Sales
                                        Executive, Domain Support, CEO Support, Support Executive, etc.).

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Define conversational flows and voice interaction requirements based on industryspecific use cases.


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">2. Data Collection and Preparation:
                            </div>
                            <div className="ps-12 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Collect textual data, scripts, and conversation flows provided by the client.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Analyze existing interaction data and identify key queries, responses, and contextswitching scenarios.


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">3. AI Agent Development:
                            </div>
                            <div className="ps-12 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Text-Based AI: Develop agents with natural language processing (NLP) capabilities
                                        to handle multi-turn text conversations, ensuring high accuracy and context
                                        retention.
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Voice Bot Integration: Incorporate voice recognition and synthesis functionalities to
                                        facilitate voice interactions, leveraging features like contextual understanding,
                                        natural intonation.


                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Conversational Platform Integration: Ensure seamless integration with popular
                                        messaging platforms.


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">4. Training and Testing:
                            </div>
                            <div className="ps-12 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Train AI agents using the client’s data to understand role-specific contexts,
                                        terminologies, and workflows.
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Conduct iterative testing (voice interactions) to fine-tune performance, accuracy,
                                        and response times.


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">5. Deployment and Integration:
                            </div>
                            <div className="ps-12 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Deploy AI agents on designated communication channels.
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Integrate with existing CRM and back-end systems for a unified customer support
                                        experience.


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    })

export default PdfPage19;