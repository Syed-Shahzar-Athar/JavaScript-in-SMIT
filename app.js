function toggleFAQ(element) {
    // Find the faq-answer element within the clicked .all-faq div
    var answer = element.querySelector('.faq-answer');

    // Toggle the visibility of the answer by toggling a CSS class
    if (answer.style.display === 'block' || answer.style.display === '') {
        answer.style.display = 'none';
        element.querySelector('i').classList.remove('fa-minus');
        element.querySelector('i').classList.add('fa-plus');
    } else {
        answer.style.display = 'block';
        element.querySelector('i').classList.remove('fa-plus');
        element.querySelector('i').classList.add('fa-minus');
    }
}
