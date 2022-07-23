const ImportTable = (array) => { // creates a table with all meals, for each meal a table [id, title, price, qty = 0]
    let mealsarray = [];
    let mealsumup = [];
    let result = [];
    for(let i = 0; i < array.length; i++) {
        mealsarray = array[i].meals
        for(let j = 0; j < mealsarray.length; j++) {
            mealsumup = []
            mealsumup.push(mealsarray[j].id)
            mealsumup.push(mealsarray[j].title)
            mealsumup.push(mealsarray[j].price)
            mealsumup.push(0)
            result.push(mealsumup)
        }
    }
    return result
}

export default ImportTable;