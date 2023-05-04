const contents = document.querySelector('.contents');

const generator = {
    button: document.querySelector('.generator-submit'),
    input: document.querySelector('.generator'),
    label: document.querySelector('label')
}

const getBibleVerse = async (bookName) => {
    try {
        let chapterNum = Math.floor(Math.random() * 20 + 1);
        let verseNum = Math.floor(Math.random() * 10 + 1);
        const res = await axios.get(`https://bible-api.com/${bookName} ${chapterNum}:${verseNum}`);
        console.log(res);
        const newDiv = document.createElement('div');
        const verseH3 = document.createElement('h3');
        const verseP = document.createElement('p');
        verseH3.innerText = res.data.reference;
        verseP.innerText = res.data.text;
        newDiv.classList.add('verse');
        contents.appendChild(newDiv)
        newDiv.appendChild(verseH3);
        newDiv.appendChild(verseP);
    }
    
    catch {
        return 'An error occured. Enter a valid Bible Book Name'
    }
};

generator.button.addEventListener('click', function(e) {
    e.preventDefault();
    getBibleVerse(generator.input.value);
    generator.input.value = ''
})