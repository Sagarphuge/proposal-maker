import { create } from "zustand";
import { ProposalType } from "../schema/schema";
interface StoreState {
  proposalsList: ProposalType[];
  formInputs: ProposalType;
  setFormInputs: (data: ProposalType) => void;
  isFromTable: boolean;
  setIsFromTable: (val: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  deleteModal: boolean;
  setDeleteModal: (val: boolean) => void;
  editModal: boolean;
  setEditModal: (val: boolean) => void;
  previewModal: boolean;
  setPreviewModal: (val: boolean) => void;
  deleteId: string;
  setDeleteId: (id: string) => void;
  editId: string;
  setEditId: (id: string) => void;
  setProposalsList: (data: ProposalType[]) => void;
  deleteProposal: (id: string) => void;
}
export const useStore = create<StoreState>((set) => ({
  proposalsList: [],
  formInputs: {
    _id: "",
    proposalType: "",
    companyName: "",
    spocName: "",
    audiencePersona: "",
    website: "",
    googleAdsStatus: "",
    products: "",
    location: "",
    proposalDate: "",
    validityDate: ""
  },
  setFormInputs: (data: ProposalType) => set(() => ({ formInputs: data })),
  isFromTable: false,
  setIsFromTable: (val: boolean) => set(() => ({ isFromTable: val })),
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
  searchQuery: "",
  setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
  deleteModal: false,
  setDeleteModal: (val: boolean) =>
    set(() => {
      document.body.style.overflowY = val ? "hidden" : "visible";
      return { deleteModal: val };
    }),
  editModal: false,
  setEditModal: (val: boolean) =>
    set(() => {
      document.body.style.overflowY = val ? "hidden" : "visible";
      return { editModal: val };
    }),
  previewModal: false,
  setPreviewModal: (val: boolean) =>
    set(() => {
      document.body.style.overflowY = val ? "hidden" : "visible";
      return { previewModal: val };
    }),
  deleteId: "",
  setDeleteId: (id: string) => set(() => ({ deleteId: id })),
  editId: "",
  setEditId: (id: string) => set(() => ({ editId: id })),
  setProposalsList: (data: ProposalType[]) =>
    set(() => ({ proposalsList: data })),
  deleteProposal: (id: string) =>
    set((state) => ({
      proposalsList: state.proposalsList.filter(
        (proposal) => proposal._id !== id
      ),
    })),
}));
