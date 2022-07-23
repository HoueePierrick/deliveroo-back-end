const CatalogSearch = (array, id, order) => {
    let examinedarray = [];
    let newarray = [];
    let result = [];
    let setarray = [];
    for(let i = 0; i < array.length; i++) {
        newarray = [];
        examinedarray = array[i];
        for(let j = 0; j < examinedarray.length - 1; j++) {
            newarray.push(examinedarray[j])
        }
        if(examinedarray[0] === id) {
            if(order==="new") {
                if(examinedarray[3] === 0) {
                    newarray.push(examinedarray[3] + 1);
                    setarray = newarray;
                } else {
                    newarray.push(examinedarray[3]);
                    result.push(newarray)
                }
            } else if(order==="add") {
                newarray.push(examinedarray[3] + 1);
                result.push(newarray)
            } else if(order==="remove" && examinedarray[3] > 0) {
                newarray.push(examinedarray[3] - 1);
                result.push(newarray)
            }
        } else {
            newarray.push(examinedarray[3])
            result.push(newarray)
        }
    }
    if(setarray.length > 0) {
        result.push(setarray);
    }
    return result;
}

export default CatalogSearch;