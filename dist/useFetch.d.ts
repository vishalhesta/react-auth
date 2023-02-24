export default function useFetch(url: any): {
    data: null;
    error: null;
    isPending: boolean;
    executeFetch: (values: any) => void;
};
