import { z } from "zod";
const websiteRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-z]{2,})(\/[^\s]*)?$/;

export const proposalSchema = z.object({
    proposalType: z.string().min(1, "Proposal type is required"),
    companyName: z.string().min(1, "Company Name is required"),
    spocName: z.string().min(1, "SPOC Name is required"),
    audiencePersona: z.string().min(1, "Select an audience persona"),
    products: z.string().min(1, "Products field is required"),
    location: z.string().min(1, "Location is required"),
    website: z.string().min(1, "Website is required").refine((val) => websiteRegex.test(val), {
        message: "Enter a valid URL starting with https:// or www",
    }),
    googleAdsStatus: z.string().min(1, "Select Google Ads status"),
    proposalDate: z.string().min(1, "Proposal Date is required"),
    validityDate: z.string().min(1, "Date of Validity is required"),
});


export type ProposalType = {
    _id?: string;
    proposalType: string;
    companyName: string;
    spocName: string;
    audiencePersona: string;
    website: string;
    googleAdsStatus: string;
    products: string;
    location: string;
    proposalDate: string;
    validityDate: string;
}