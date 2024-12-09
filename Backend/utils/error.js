export const createError = (status, messge) => {
    const err = new Error();
    err.status = status;
    err.message = messge;
    return err;
}