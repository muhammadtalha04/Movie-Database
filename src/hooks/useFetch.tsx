import { useEffect, useState } from 'react';

export const useFetch = (url: string, dataType: string) => {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: state.loading }));

        fetch(url)
            .then(x => {
                switch (dataType) {
                    case "json":
                        return x.json();
                    default:
                        return x.text();
                }
            })
            .then(y => {
                setState({ data: y, loading: false });
            });
    }, [url, setState, dataType]);

    return state;
};