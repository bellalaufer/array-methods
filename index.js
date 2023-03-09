const filterByAge = (el) => {
    return el.age < 50

};

const filterByScore = (el) => {
    return el.score > 75
};

const filterByServiceRecord = (el) => {
    return el.serviceRecord > 5
};

const sortByScore = (arr) => {
    const newArr = [...arr]
    return newArr.sort((a, b) =>
        b.score - a.score
    );
};

const getMeanAge = (arr) => {

    let sum = 0;
    let n = arr.length

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age
    }
    return sum / n

};

const getMeanAgeReduce = (arr) => {

    let sum = arr.reduce((n, { age }) => n + age, 0)
    return sum / arr.length

}



const getNamesOnly = (arr) => {

    return arr.name

};

module.exports = {
    filterByAge,
    filterByScore,
    filterByServiceRecord,
    sortByScore,
    getMeanAge,
    getMeanAgeReduce,
    getNamesOnly,
}
