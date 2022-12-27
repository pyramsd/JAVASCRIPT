function acronym(words){
    let acronym = "";
    let list_words = words.split(" ");

    for (i of list_words){
        acronym += i[0].toUpperCase();
    }

    console.log(acronym);
}

acronym("hola mundo cruel");