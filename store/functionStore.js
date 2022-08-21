import create from "zustand";
import axios from "axios";

const functionStore = create((set) => ({
  projects: [],
  certs: [],
  fetchProjects: async () => {
    const { data } = await axios.get(`/api/projects`);
    set({ projects: data });
  },
  fetchCerts: async () => {
    const { data } = await axios.get(`/api/certs`);
    set({ certs: data });
  },
}));

export default functionStore;
