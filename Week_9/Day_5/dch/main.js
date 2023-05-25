function anagram(str1, str2){
    let new_str1 = [...str1]
    let new_str2 = [...str2]
    new_str1 = new_str1.filter(item => item !== " ");
    new_str2 = new_str2.filter(item => item !== " ");
    let new_arr1 = new_str1.map(item => item.toLowerCase());
    let new_arr2 = new_str2.map(item => item.toLowerCase());
    new_arr1.sort();
    new_arr2.sort();
    return new_arr1.join('') === new_arr2.join('');
}
console.log(anagram("The Morse Code" , "Here come dots"))
