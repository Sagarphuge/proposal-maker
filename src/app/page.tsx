import React from 'react'
import AddForm from '../components/AddForm'
import ProposalList from '../components/ProposalList'
import { getAllProposals } from '../server/actions'
import { Toaster } from 'react-hot-toast'
export const dynamic = 'force-dynamic';

async function page() {
    const proposalsList = await getAllProposals()
    return (
        <div className='max-w-7xl px-5 mx-auto'>
            <AddForm />
            <ProposalList list={proposalsList} />
            <Toaster/>
        </div>
    )
}

export default page