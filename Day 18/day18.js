
// Example objects
const obj1 = {
    "name": "111",
    "age": 22,
    "fatherName": "111",
    "address": "111",
    "mobNumber": "1111111112",
    "townVillage": "111",
    "department": "Masson",
    "gender": "Female",
    "surveyNo": 111111111111,
    "status": "Inactive",
    "id": "7520e6a1-e9c4-4862-9617-00d87585b91b",
};
const obj2 = {
    "name": "Niz",
    "age": 23,
    "fatherName": "KB",
    "address": "Mangalore",
    "mobNumber": "1234567890",
    "townVillage": "Jalalbagh",
    "department": "Earth Work",
    "gender": "Male",
    "surveyNo": 980,
    "status": "Active",
     "id": "7520e6a1-e9c4-4862-9617-00d87585b91b"
}
function compareObjects(obj1, obj2) {
    const differences = [];
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (obj1[key] !== obj2[key]) {
                differences.push({ key, obj1: obj1[key], obj2: obj2[key] });
            }
        } else {
            differences.push({ key, obj1: obj1[key], obj2: undefined });
            
        }
    }
    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            differences.push({ key, obj1: undefined, obj2: obj2[key] });
        }
    }
    return differences;
}

const differences = compareObjects(obj1, obj2);
if (differences.length === 0) {
    console.log("Objects are matching");
} else {
    console.log("Objects are not matching. Differences:");
    // console.log('differences',differences)
    // console.log(JSON.stringify(differences));
    differences.forEach(diff => {
        // console.log(`{ key: '${diff.key}', obj1: ${diff.obj1}, obj2: ${diff.obj2} }`);
        console.log(`{ key: '\x1b[31m${diff.key}\x1b[0m', obj1: \x1b[32m${JSON.stringify(diff.obj1)}\x1b[0m, obj2: \x1b[32m${JSON.stringify(diff.obj2)}\x1b[0m }`);
   
    });
}


