const quotes = [
    ` &#8220; Be yourself; everyone else is already taken. &#8221;
<br> 	&#8211; Oscar Wilde
 `,
    `&#8220; So many books, so little time.&#8221; <br> 	&#8211; Frank Zappa`,
    `&#8220; A room without books is like a body without a soul.&#8221; <br> 	&#8211;Marcus Tullius Cicero`,
    `&#8220;You only live once, but if you do it right, once is enough.&#8221; <br> 	&#8211; Mae West`,
    `&#8220;Be the change that you wish to see in the world.&#8221; <br> 	&#8211; Mahatma Gandhi`
];

 function addqoute() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let selectedQuote;

    // Using a for loop to find the quote at the random index
    for (let i = 0; i < quotes.length; i++) {
        if (i === randomIndex) {
            selectedQuote = quotes[i];
            break;
        }
    }

    document.getElementById('quoteDisplay').innerHTML = selectedQuote;
//    document.getElementById('quote').innerHTML=selectedQuote;
}
