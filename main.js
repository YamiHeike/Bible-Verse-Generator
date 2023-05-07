const contents = document.querySelector('.contents');
const crossIcon = document.querySelector('#cross-icon-button').innerHTML;
const templateVerse = document.querySelector('.verse');

templateVerse.style.display = 'none';
templateVerse.style.visibility = 'hidden';

const generator = {
    button: document.querySelector('.generator-submit'),
    book: document.querySelector('.generator'),
    chapter: document.querySelector('.generator-chapter'),
    verse: document.querySelector('.generator-verse')
}


const getBibleVerse = async (bookName, chapterNum, verseNum) => {
    try {
        const res = await axios.get(`https://bible-api.com/${bookName} ${chapterNum}:${verseNum}`);
        const newDiv = document.createElement('div');
        const verseH3 = document.createElement('h3');
        const verseP = document.createElement('p');
        const verseButton = document.createElement('button');
        verseH3.innerText = res.data.reference;
        verseP.innerText = res.data.text;
        verseButton.innerHTML = crossIcon;
        newDiv.classList.add('verse');
        contents.appendChild(newDiv)
        newDiv.appendChild(verseH3);
        newDiv.appendChild(verseP);
        newDiv.appendChild(verseButton);
        verseButton.addEventListener('click', () => {
            if(verseButton.innerHTML = crossIcon)
            verseButton.parentElement.remove();
        })
        
        
    }
    
    catch {
        return 'An error occured. Enter a valid address'
    }
};

generator.button.addEventListener('click', function(e) {
    e.preventDefault();
    getBibleVerse(generator.book.value, generator.chapter.value, generator.verse.value);
    generator.book.value = '';
    generator.chapter.value = '';
    generator.verse.value = '';
})

