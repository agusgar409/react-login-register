import {create} from 'zustand';

type LoginStore = {
    username: string;
    password: string;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
};

const useLoginStore = create<LoginStore>((set) => ({
    username: '',
    password: '',
    setUsername: (username) => set(() => ({username})),
    setPassword: (password) => set(() => ({password})),
}));

export default useLoginStore;