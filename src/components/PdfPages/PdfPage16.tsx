import React from "react";
import { Logo } from "../Logo";
import { ProposalType } from "../../schema/schema";
import Bullet from "../BulletPoint";

const PdfPage16 = React.forwardRef<HTMLDivElement, { formInputs: ProposalType }>(
    ({ formInputs }, ref) => {
        return <div ref={ref} className="h-[1700px] relative text-xl text-neutral-900">
            <div className="absolute top-6 right-6">
                {["AdGenX","PropGenX","HealthGenX"].includes(formInputs.proposalType) ? 13 : 14}
            </div>
            <div className="h-full px-10">
                <div className="h-full border-s px-10">
                    <div className="pt-10">
                        <Logo />
                    </div>
                    <div className="relative mt-10 mb-16">
                        <div className="absolute top-0 -left-10 h-28 w-2 bg-gradient-to-br from-green-500 to-blue-400"></div>
                        <p className="text-7xl font-black">Terms & Conditions</p>
                    </div>
                    <p>
                        These terms apply to all the plans. By making the payment, you
                        accept the following terms and conditions.
                    </p>
                    {
                        formInputs.proposalType === "AdGenX" && <> <div className="mt-10 grid gap-1">
                            <p className="text-xl font-bold">
                                Google Ads Policy Compliance and Responsibility :
                            </p>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Inaiways is not liable for any disruptions or consequences arising from policy violations, and the client
                                    agrees to promptly resolve such matters with Google and bear any associated costs or damages. For
                                    more details refer to https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages.

                                </div>
                            </div>
                        </div>
                        </>
                    }
                    {
                        formInputs.proposalType === "AdGenX" && <> <div className="mt-10 grid gap-1">
                            <p className="text-xl font-bold">
                                Delivery & support limits :
                            </p>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Maximum keyword process of 5000 Keywords will be processed for research. For more details refer to
                                   https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages.

                                </div>
                            </div>
                        </div>
                        </>
                    }
                    {
                        formInputs.proposalType === "AdGenX" && <> <div className="mt-10 grid gap-1">
                            <p className="text-xl font-bold">
                                General Terms :
                            </p>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Government regulations, local authority regulations, and ad platform policies supersede any features in
                                    the AI-Portal product and service. For more details refer to  https://www.inaiways.com/v/terms-and-conditions-leadgenx-without-landing-pages.


                                </div>
                            </div>
                        </div>
                        </>
                    }
                    {
                        formInputs.proposalType === "LeadGenX" && <>
                            <div className="mt-10 grid gap-1">
                                <p className="text-xl font-bold">
                                    Delivery & support limits :
                                </p>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Maximum keyword process of 5000 Keywords will be processed for research.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Refer to https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp for more details.
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {
                        formInputs.proposalType === "LeadGenX" && <> <div className="mt-10 grid gap-1">
                            <p className="text-xl font-bold">
                                General Terms :
                            </p>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Government regulations, local authority regulations, and ad platform policies supersede any features in
                                    the AI-Portal product and service.



                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Refer to https://www.inaiways.com/v/terms-conditions-leadgenx-with-lp for more details.


                                </div>
                            </div>
                        </div>
                        </>
                    }
                    {["PropGenX", "HealthGenX"].includes(formInputs.proposalType) &&
                        <>
                            <div className="mt-10 grid gap-1">
                                <p className="text-xl font-bold">
                                    Delivery & support limits :
                                </p>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Maximum keyword process of 5000 Keywords will be processed for research.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        For more details refer to https://www.inaiways.com/v/terms-conditions-direct-promoters.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Max 10 Projects are covered under - 25HP101 within a Year.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        {
                                            formInputs.proposalType==="HealthGenX" ?"Centers or Services from or as Channel Partners and Joint Ventures are covered under -25HP101." :" Projects from or as Channel Partners and Joint Ventures are covered under - 25HP101."
                                        }
                                       
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {["PropGenX", "HealthGenX"].includes(formInputs.proposalType) && <>
                        <div className="mt-10 grid gap-1">
                            <p className="text-xl font-bold">
                                General Terms :
                            </p>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    Government regulations, local authority regulations, and ad platform policies supersede any
                                    features in the AI-Portal product and service.


                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-5">
                                    <Bullet />
                                </div>
                                <div>
                                    For more details refer to https://www.inaiways.com/v/terms-conditions-direct-promoters.



                                </div>
                            </div>
                        </div>
                    </>
                    }
                    {
                        formInputs.proposalType === "LeadTitanX" && <>
                            <div className="mt-10 grid gap-1">
                                <p className="text-xl font-bold">
                                    Delivery & support limits :
                                </p>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Maximum keyword process of 5000 Keywords will be processed for research.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Max 10 products/ offerings are covered under - 25LE107 within a Year.

                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="mt-5">
                                        <Bullet />
                                    </div>
                                    <div>
                                        Refer to https://www.inaiways.com/v/terms-conditions-enterprises for more details.

                                    </div>
                                </div>

                            </div></>
                    }
                    {formInputs.proposalType === "LeadTitanX" && <div className="mt-10 grid gap-1">
                        <p className="text-xl font-bold">
                            General Terms :
                        </p>
                        <div className="flex gap-3">
                            <div className="mt-5">
                                <Bullet />
                            </div>
                            <div>
                                Government regulations, local authority regulations, and ad platform policies supersede any
                                features in the AI-Portal product and service.


                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-5">
                                <Bullet />
                            </div>
                            <div>
                                For more details refer to https://www.inaiways.com/v/terms-conditions-enterprises.

                            </div>
                        </div>
                    </div>}
                </div>

            </div>
        </div>
    })

export default PdfPage16;