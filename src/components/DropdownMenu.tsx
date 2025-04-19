"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ProposalType } from "../schema/schema";
import { useStore } from "../store/store";

const CustomDropdownMenu = ({ list }: { list: ProposalType }) => {
    const {
        setDeleteModal,
        setIsFromTable,
        setFormInputs,
        setPreviewModal,
        setDeleteId,
        setEditId,
        setEditModal,
        proposalsList,
    } = useStore();

    const deleteHandler = (id: string | undefined) => {
        if (!id) return;
        setDeleteModal(true);
        setDeleteId(id);
    };

    const editHandler = (id: string | undefined) => {
        if (!id) return;
        const ans = proposalsList.find((proposal) => proposal._id === id);
        if (ans) {
            setFormInputs(ans);
            setEditId(id);
            setEditModal(true);
        }
    };

    const viewHandler = (item: ProposalType) => {
        setFormInputs(item);
        setIsFromTable(true);
        setPreviewModal(true);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => viewHandler(list)}
                    className="cursor-pointer"
                >
                    View & Download
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => editHandler(list._id)}
                    className="cursor-pointer"
                >
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => deleteHandler(list._id)}
                    className="cursor-pointer text-red-600"
                >
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CustomDropdownMenu;
