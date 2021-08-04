import Pipe from '../../types/Pipe';

export default function orderByName(a: Pipe, b: Pipe) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
