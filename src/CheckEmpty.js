function CheckEmpty(arg) {
    if (!arg) {
        console.log('Input cannot be emptied')
        return false;
    }
    if (Array.isArray(arg)) {
        if (!arg[0]) {
            console.log('Input cannot be emptied')
            return false;
        }
        if (!arg[1]) {
            console.log('Input cannot be emptied')
            return false;
        }
    }
    return true;
}
module.exports = CheckEmpty;