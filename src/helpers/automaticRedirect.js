

export const automaticRedirect = (hook, path, delay) => {

    setTimeout(() => {
        hook(path)
    }, delay);

};