import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";
import Bullet from "../BulletPoint";


const PdfPage4 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div id="4" ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">4</div>
            <div className="h-full px-10">
                <div className="h-full border-s ps-12">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-20">
                        <div className="absolute top-2 -left-12 h-40 w-3 bg-gradient-to-br from-green-500 to-cyan-400"></div>
                        <p className="text-3xl ">
                            {
                                (formInputs.proposalType === "Agent PRO" || formInputs.proposalType === "Agent LIVE" || formInputs.proposalType === "Agent ESSENTIAL") ? "AI-Agents Work Force - Plans" : " AI-Powered Lead Generation Plans"
                            }

                        </p>
                        <p className="text-7xl font-black">{formInputs.proposalType === "PropGenX" || formInputs.proposalType === "Agent PRO" || formInputs.proposalType === "Agent LIVE" || formInputs.proposalType === "Agent ESSENTIAL" || formInputs.proposalType==="LeadTitanX" ? "Commercials" : "Investment"}</p>
                    </div>


                    {
                        (formInputs.proposalType === "LeadGenX" || formInputs.proposalType === "AdGenX") && <div className="mb-16 text-3xl font-medium text-blue-600">
                            Engagement Plans
                        </div>
                    }


                    {
                        (formInputs.proposalType === "LeadGenX" || formInputs.proposalType === "AdGenX") &&
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold">
                                <p className="-mt-5">
                                    SR. <br />
                                    NO
                                </p>
                            </div>
                            <div className="col-span-3 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                                <p className="-mt-5">Particulars</p>
                            </div>
                            <div className="col-span-4 grid h-20 place-content-center border-x border-y border-gray-400 text-lg font-semibold ">
                                <p className="-mt-5">
                                    ESSENTIALS
                                    <span className="font-normal  "> {
                                        formInputs.proposalType === "LeadGenX" && "(Without Taxes)"}</span>
                                </p>
                            </div>
                            <div className="col-span-4 grid h-20 place-content-center border-y border-e border-gray-400 text-lg font-semibold ">
                                <p className="-mt-5">
                                    BUSINESS-PRO
                                    <span className="font-normal  "> {
                                        formInputs.proposalType === "LeadGenX" && "(Without Taxes)"}</span>
                                </p>
                            </div>

                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>

                            <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">{formInputs.proposalType === "AdGenX" ? "One Time Setup Charges" : "Setup Charges"}</p>
                                    {
                                        formInputs.proposalType === "LeadGenX" && <p className="italic">For one product per country</p>
                                    }


                                    <div className="mt-2 grid gap-2">
                                        {
                                            formInputs.proposalType === "LeadGenX" && <> <div id="i0mbks" className="flex gap-3">
                                                <span id="idghz9" className="mt-5">
                                                    <Bullet />
                                                </span>
                                                <div id="i8id6r"  >
                                                    Keyword hunting & grouping
                                                </div>
                                            </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Ad copy writing
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Landing page design
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Campaign Setup
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Ads Realignment
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Dashboard + AutoTune
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {
                                            formInputs.proposalType === "AdGenX" && <>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Keyword hunting & grouping
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Ad Copy writing
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Account Setup                              </div>
                                                </div>
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div  >
                                    <p className="text-center text-xl font-bold">
                                        {formInputs.proposalType === "LeadGenX" ? "INR 80K (One-time)" : "INR 39.5K"}
                                    </p>
                                    <div className="mt-5 grid gap-2">
                                        {
                                            formInputs.proposalType === "LeadGenX" ?
                                                <><div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Up to 100 good intent keywords
                                                    </div>
                                                </div>
                                                    <div id="i0mbks" className="flex gap-3">
                                                        <span id="idghz9" className="mt-5">
                                                            <Bullet />

                                                        </span>
                                                        <div id="i8id6r"  >
                                                            Landing pages with dynamic headings
                                                        </div>
                                                    </div>
                                                    <div id="i0mbks" className="flex gap-3">
                                                        <span id="idghz9" className="mt-5">
                                                            <Bullet />

                                                        </span>
                                                        <div id="i8id6r"  >
                                                            First Month’s AI - Market Realignment included
                                                        </div>
                                                    </div>
                                                    <div id="i8id6r" className="text-center">
                                                        [25DC109]
                                                    </div></> : <>
                                                    <p className="text-center">Upto 100 good  intent keywords </p>
                                                    <p className="text-center">[25DC101]</p>
                                                </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div  >
                                    <p className="text-center text-xl font-bold">
                                        {formInputs.proposalType === "LeadGenX" ? "INR 1.2L (One-time)" : "INR 69.5K"}
                                    </p>
                                    <div className="mt-5 grid gap-2">
                                        {
                                            formInputs.proposalType === "LeadGenX" ?
                                                <><div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Up to 500 good intent keywords
                                                    </div>
                                                </div>
                                                    <div id="i0mbks" className="flex gap-3">
                                                        <span id="idghz9" className="mt-5">
                                                            <Bullet />

                                                        </span>
                                                        <div id="i8id6r"  >
                                                            Landing pages with dynamic headings & images
                                                        </div>
                                                    </div>
                                                    <div id="i0mbks" className="flex gap-3">
                                                        <span id="idghz9" className="mt-5">
                                                            <Bullet />

                                                        </span>
                                                        <div id="i8id6r"  >
                                                            First Month’s AI - Market Realignment included
                                                        </div>
                                                    </div>
                                                    <div id="i0mbks" className="flex gap-3">
                                                        <span id="idghz9" className="mt-5">
                                                            <Bullet />

                                                        </span>
                                                        <div id="i8id6r"  >
                                                            First Month’s Expert Support included
                                                        </div>
                                                    </div>
                                                    <div id="i8id6r" className="text-center">
                                                        [25DC113]
                                                    </div></> : <>
                                                    <p className="text-center">Upto 500 good  intent keywords </p>
                                                    <p className="text-center">[25DC105]</p>
                                                </>
                                        }

                                    </div>
                                </div>
                            </div>
                            {
                                formInputs.proposalType === "LeadGenX" && <>
                                    <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                        <p className="font-bold">2</p>
                                    </div>

                                    <div className="col-span-3 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                        <div>
                                            <p className="mb-1 text-xl font-bold">
                                                Tech-Stack Operations charges
                                            </p>
                                            <p className="italic">Common for all products & countries</p>

                                            <div className="mt-2 grid gap-2">
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Email & WhatsApp notifications
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        High Speed Servers for landing pages
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                        <div  >
                                            <p className="text-center text-xl font-bold">
                                                INR 19.5K per annum
                                            </p>
                                            <div id="i8id6r" className="mt-5 text-center">
                                                [25DC110]
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 grid items-center gap-5 border-e border-b border-gray-400 bg-green-50 p-4 pb-8">
                                        <div  >
                                            <p className="text-center text-xl font-bold">
                                                INR 34.5K per annum
                                            </p>
                                            <div id="i8id6r" className="mt-5 text-center">
                                                [25DC114]
                                            </div>
                                        </div>
                                    </div></>
                            }

                        </div>
                    }
                    {
                        (formInputs.proposalType === "PropGenX" || formInputs.proposalType === "HealthGenX" || formInputs.proposalType === "LeadTitanX") &&
                        <div className="grid grid-cols-12">
                            <div className="col-span-1 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold">
                                <p className="-mt-5">
                                    SR.
                                    NO
                                </p>
                            </div>
                            <div className="col-span-6 grid h-20 place-content-center border-y border-s border-gray-400 text-lg font-semibold uppercase">
                                <p className="-mt-5">Particulars</p>
                            </div>
                            <div className="col-span-5 grid h-20 place-content-center border-x border-y border-gray-400 text-lg font-semibold uppercase">
                                <p className="-mt-5">
                                    Amount <span className="font-normal capitalize"> (Without Taxes)</span>
                                </p>
                            </div>
                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>
                            <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">Setup Charges</p>
                                    <p className="italic">{formInputs.proposalType === "PropGenX" && "For all projects* launched within 1 year of contract  (*subject to terms & conditions)"}{formInputs.proposalType === "HealthGenX" && "For all services marketed within 1 year of contract* (*subject to Terms & Conditions)"}{formInputs.proposalType === "LeadTitanX" && "For all products / offering of the company (up to Max. 10 products / offerings)"}</p>

                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Keyword hunting & grouping
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Ad copy writing
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Landing page design {formInputs.proposalType === "PropGenX"
                                                    ? "(for 1 project)"
                                                    : formInputs.proposalType === "LeadTitanX"
                                                        ? "(for the first 3 product / offerings)"
                                                        : "(for 1 service and all centers)"}
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Lead qualifying framework setup

                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Campaign Setup

                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >

                                                Ads Market Realignment

                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >


                                                Dashboard + AutoTune

                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >



                                                Tech stack setup for lead delivery

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div>
                                    <p className="mb-1 text-center text-xl font-bold">INR 6L (for 1 Year)</p>
                                    <p className="text-center mt-3">{formInputs.proposalType === "LeadTitanX" ? "[25LE107]" : "[25HP101 & 25HP104]"}</p>
                                    <div className="my-4 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Up to {formInputs.proposalType === "LeadTitanX" ? "500" : "100"} good intent keywords {formInputs.proposalType === "LeadTitanX" && "per product"}
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >

                                                Landing pages with dynamic
                                                headings
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >

                                                First Month’s AI - Market
                                                Realignment included

                                            </div>
                                        </div>


                                    </div>
                                    {
                                        formInputs.proposalType !== "LeadTitanX" && <div className="text-center font-bold">
                                            25% off on 2nd year’s engagement
                                        </div>
                                    }

                                </div>

                            </div>
                            <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                <p className="font-bold">2</p>
                            </div>
                            <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">
                                        Landing Pages{" "}
                                        {formInputs.proposalType === "PropGenX"
                                            ? "(2nd project onwards)"
                                            : formInputs.proposalType !== "LeadTitanX"
                                                ? "(2nd service onwards)"
                                                : "(4th product / offering onwards)"}
                                    </p>
                                    <p className="italic">Contextual landing pages to improve conversation ratio and generate qualified leads</p>

                                    <div className="mt-2 grid gap-2">
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Landing pages for each Ad group
                                            </div>
                                        </div>
                                        <div id="i0mbks" className="flex gap-3">
                                            <span id="idghz9" className="mt-5">
                                                <Bullet />

                                            </span>
                                            <div id="i8id6r"  >
                                                Setup of lead qualifying questionnaries as per BANT framework
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                <div>
                                    <p className="mb-1 text-center text-xl font-bold">{formInputs.proposalType === "HealthGenX"
                                        ? "INR 44K per Service"
                                        : formInputs.proposalType === "LeadTitanX"
                                            ? "INR 44K per product / offering"
                                            : "INR 44K per Site"}
                                    </p>
                                    <p className="text-center mt-3">{formInputs.proposalType === "LeadTitanX" ? "[25LE110]" : "[25HP103]"}</p>
                                </div>

                            </div>
                            {
                                formInputs.proposalType !== "LeadTitanX" && <>
                                    <div className="col-span-1 grid place-content-center border-s border-b border-gray-400 p-4 pb-8 uppercase">
                                        <p className="font-bold">3</p>
                                    </div>
                                    <div className="col-span-6 grid items-center border-s border-b border-gray-400 bg-cyan-50 p-4 pb-8  ">
                                        <div>
                                            <p className="mb-1 text-xl font-bold">AI - Market Realignment (Optional)</p>


                                            <div className="mt-2 grid gap-2">
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Block non-performing Keywords
                                                    </div>
                                                </div>
                                                <div id="i0mbks" className="flex gap-3">
                                                    <span id="idghz9" className="mt-5">
                                                        <Bullet />

                                                    </span>
                                                    <div id="i8id6r"  >
                                                        Align search terms to company's keywords
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-5 grid items-center border-x border-b border-gray-400 bg-green-50 p-4 pb-8">
                                        <div>
                                            <p className="mb-1 text-center text-xl font-bold">INR 43.5K per QTR
                                            </p>
                                            <p className="text-center mt-3">[25HP102]</p>
                                        </div>

                                    </div></>
                            }



                        </div>
                    }

                    {
                        (formInputs.proposalType === "Agent PRO" || formInputs.proposalType === "Agent ESSENTIAL" || formInputs.proposalType === "Agent LIVE") &&
                        <div className="grid gap-1 grid-cols-12">
                            <div className="col-span-1 grid h-20 place-content-center  bg-neutral-900 text-white text-lg font-semibold">
                                <p className="-mt-5">
                                    SR.
                                    NO
                                </p>
                            </div>
                            <div className="col-span-8 grid h-20 place-content-center   bg-neutral-900 text-white text-lg font-semibold uppercase">
                                <p className="-mt-5">Particulars</p>
                            </div>
                            <div className="col-span-3 grid h-20 place-content-center border-x border-y border-gray-400 bg-neutral-900 text-white text-lg font-semibold Capitalize text-center">
                                <p className="-mt-5">
                                    AMOUNT (Without Taxes)
                                </p>
                            </div>
                            <div className="col-span-1 bg-cyan-50 grid place-content-center  p-4 pb-8 uppercase">
                                <p className="font-bold">1</p>
                            </div>
                            <div className="col-span-8 bg-cyan-50 flex flex-col justify-center p-4 pb-8 ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">AI Agent {formInputs.proposalType==="Agent LIVE" ? "Live" : formInputs.proposalType==="Agent PRO" ? "Pro" : "Essentials" }</p>
                                    <p className="text-lg">Per Agent Role</p>
                                </div>
                            </div>
                            <div className="col-span-3 bg-green-50 grid text-end  p-4 pb-8 ">
                                <p className="mb-1 text-xl font-bold">INR  
                                    {formInputs.proposalType==="Agent LIVE" ? " 7.5L" : formInputs.proposalType==="Agent PRO" ? " 6.5L" : " 4.5L" } (for 1 Year)</p>
                                <p className="text-lg">Per Agent Role</p>
                                <p className="text-lg"> {formInputs.proposalType==="Agent LIVE" ? "[25LIV101] " : formInputs.proposalType==="Agent PRO" ? "[25PRO101] " : "[25ESS101] " }</p>
                            </div>
                            <div className="col-span-1 bg-cyan-50 grid place-content-center  p-4 pb-8 uppercase">
                                <p className="font-bold">2</p>
                            </div>
                            <div className="col-span-8 bg-cyan-50 flex flex-col justify-center p-4 pb-8 ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">Talk Time - Voice</p>
                                    <p className="text-lg">Per Min</p>
                                    <div id="i0mbks" className="flex gap-3 mt-4">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            Per minute talk time charges to be billed monthly from the
                                            pre paid balance.
                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            Minimum Top-up Value - INR 21000 at a time.

                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            Minimum Balance to be maintained - INR 100 Only.

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 bg-green-50 text-end flex flex-col justify-center  p-4 pb-8 ">
                                <div>

                                    <p className="mb-1 text-xl font-bold">INR 12 Only</p>
                                    <p className="text-lg">Per Minute
                                    </p>
                                    <p className="text-lg">{formInputs.proposalType==="Agent LIVE" ? "[25LIV102] " : formInputs.proposalType==="Agent PRO" ? "[25PRO102] " : "[25ESS102] " }</p>
                                </div>
                            </div>
                            <div className="col-span-1 bg-cyan-50 grid place-content-center  p-4 pb-8 uppercase">
                                <p className="font-bold">3</p>
                            </div>
                            <div className="col-span-8 bg-cyan-50 flex flex-col justify-center p-4 pb-8 ">
                                <div>
                                    <p className="mb-1 text-xl font-bold">Annual Maintenance Charges</p>
                                    <p className="text-lg">Per Year after first year</p>
                                    <div id="i0mbks" className="flex gap-3 mt-4">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            AI Agent Re-Training and response updating

                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            Tech Stack Maintenance Charges


                                        </div>
                                    </div>
                                    <div id="i0mbks" className="flex gap-3">
                                        <span id="idghz9" className="mt-5">
                                            <Bullet />

                                        </span>
                                        <div id="i8id6r"  >
                                            Expert Support for Agent Reconfigurations upto 15 Hrs

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 bg-green-50 text-end flex flex-col justify-center  p-4 pb-8 ">
                                <div>

                                    <p className="mb-1 text-xl font-bold">INR {(formInputs.proposalType==="Agent LIVE" || formInputs.proposalType==="Agent PRO") ? "3L" : "2L" }
                                    </p>
                                    <p className="text-lg">Per Year
                                    </p>
                                    <p className="text-lg">{formInputs.proposalType==="Agent LIVE" ? "[25LIV103] " : formInputs.proposalType==="Agent PRO" ? "[25PRO103] " : "[25ESS103] " }</p>
                                </div>
                            </div>

                        </div>
                    }



                    {formInputs.proposalType === "LeadGenX" && (
                        <div className="mt-16">
                            <p className="text-xl font-semibold">Note</p>
                            <div className="mt-3 grid gap-2 ps-6">
                                <p>
                                    1. Second years onwards, only Tech-Stack Operations charges will
                                    be applicable to ensure continuity of your campaigns with same
                                    landing pages
                                </p>
                                <p>
                                    2. In case, data is pushed in your CRM via integration, INR 6K
                                    PA will be charged for data handling and management
                                </p>
                                <p>3. Taxes are applicable as per government norms.</p>
                            </div>
                        </div>
                    )}

                    {["LeadTitanX", "PropGenX", "HealthGenX"].includes(formInputs.proposalType) && (
                        <div className="mt-16">
                            <p className="text-xl font-semibold">Note</p>
                            <p className="mt-3 ps-6">
                                In case the landing pages are needed beyond the tenure of this proposal (1 year from the date of payment), an additional charge of INR 19.5K PA will be applicable for tech-stack maintenance (servers for landing pages, email & WhatsApp notification for lead delivery, etc.)
                            </p>
                        </div>
                    )}
                    {
                        (formInputs.proposalType === "Agent PRO" || formInputs.proposalType === "Agent ESSENTIAL" || formInputs.proposalType === "Agent LIVE") &&
                        <div className="mt-16">
                            <p className="text-xl font-semibold">Note :</p>
                            <p className="mt-3">
                                Telephone, WhatsApp, Email and Dialer Services charges at actuals or Your Cost.
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    })

export default PdfPage4;