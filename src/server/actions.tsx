"use server";

import connectDB from "../../lib/mongoConnect";
import Proposal from "../../model/Proposal";
import { ProposalType } from "../schema/schema";
export async function getAllProposals(): Promise<ProposalType[]> {
    await connectDB();
    try {
        const data = await Proposal.find();
        return data
            .map((item) => ({
                ...item.toObject(),
                _id: item._id.toString(),
            }))
            .reverse();
    } catch (error) {
        console.error("Error fetching proposals:", error);
        throw new Error("Failed to fetch proposals.");
    }
}

export async function getAllProposals(): Promise<ProposalType[]> {
    try {
        const data = await Proposal.find();
        return data
            .map((item) => ({
                ...item.toObject(),
                _id: item._id.toString(),
            }))
            .reverse();
    } catch (error) {
        console.error("Error fetching proposals:", error);
        throw new Error("Failed to fetch proposals.");
    }
}

export async function addProposal(data: ProposalType): Promise<ProposalType> {
    await connectDB();
    try {
        const newProposal = new Proposal(data);
        const savedProposal = await newProposal.save();
        return {
            ...savedProposal.toObject(),
            _id: savedProposal._id.toString(),
        };
    } catch (error) {
        console.error("Error adding proposal:", error);
        throw new Error("Failed to add proposal.");
    }
}



export async function deleteProposalById(id: string): Promise<void> {
    await connectDB();
    try {
        await Proposal.findByIdAndDelete(id);
    } catch (error) {
        console.error("Error deleting proposal:", error);
        throw new Error("Failed to delete proposal.");
    }
}



export async function updateData(data: ProposalType): Promise<void> {
    await connectDB();
    try {
        await Proposal.findByIdAndUpdate(data._id, data);
    } catch (error) {
        console.error("Error updating proposal:", error);
        throw new Error("Failed to update proposal.");
    }
}
