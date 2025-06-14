import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";
import Bullet from "../BulletPoint";

const PdfPage20 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">
                12
            </div>
            <div className="h-full px-10 ">
                <div className="h-full  pb-16  border-s px-10">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-36 w-3 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-3xl">Plan of Action

                        </p>
                        <p className="text-7xl font-black">Weekly Plan </p>
                    </div>
                    <div className="mb-12">
                        <p className="font-bold text-3xl">The entire project is scheduled for completion within 1 month</p>
                    </div>
                    <div className="mb-8">
                        <p className="font-bold text-2xl text-blue-700"> Setup of AI Agent
                        </p>
                    </div>
                    <div className="grid gap-10">
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">Week 1–2: Requirement Analysis & Data Collection
                            </div>
                            <div className="ps-10 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Conduct discovery sessions with stakeholders to gather goals, expected user journeys, and
                                        functional scope.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Identify key use cases and roles the AI agent will serve (e.g., customer support, lead
                                        qualification, FAQs).

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        <span className="font-bold">  Client Action: </span> Provide all relevant training material in question-answer format covering
                                        anticipated user queries, responses, and edge cases.


                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Content should include variations of expected queries and corresponding approved answers.


                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Finalize conversational flows, tone of voice, escalation protocols, and integration requirements.

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">Week 3: AI Agent Development & Integration

                            </div>
                            <div className="ps-10 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Develop the voice and text modules of the AI agent based on finalized conversation design
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Train the model using client-provided Q&A content and scenario-specific dialogues.


                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Integrate role-based scripts tailored to various customer touchpoints (e.g., product support,
                                        billing inquiries).

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">Week 4 (Phase 1): Testing & Quality Assurance


                            </div>
                            <div className="ps-10 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Conduct thorough testing of both text and voice modules, including:
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >
                                        Intent recognition accuracy


                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Response relevance and natural language handling

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Voice clarity, pacing, and tone
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Handling of ambiguous or out-of-scope queries

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >


                                        Simulate real-life user sessions to ensure reliability under concurrent usage (up to 15 sessions).

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >



                                        Confirm adherence to usage limits (e.g., 30-min session time, 2GB monthly data transfer).


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="text-2xl font-bold">Week 4 (Phase 2): Deployment


                            </div>
                            <div className="ps-10 grid gap-2">
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        Deploy the trained AI agent.
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <span className="mt-5">
                                        <Bullet />
                                    </span>
                                    <div  >

                                        and Start the Integrations as per the requirement.



                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    })

export default PdfPage20;