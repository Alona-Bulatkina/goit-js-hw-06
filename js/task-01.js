const itemsRef = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${itemsRef}`);

const headingRef = document.querySelectorAll('.item');
headingRef.forEach(element => {
    console.log(element.firstElementChild.textContent);
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Elements: ${itemsLength}`);

});

