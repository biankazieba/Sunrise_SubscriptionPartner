const labels1 = document.querySelectorAll('input[name="group1"] + label');
const labels2 = document.querySelectorAll('input[name="group2"] + label');

labels1.forEach(label => {
    label.addEventListener('click', () => {
        labels1.forEach(l => l.classList.remove('border-2', 'border-red-600'));
        label.classList.add('border-2', 'border-red-600');
    });
});

labels2.forEach(label => {
    label.addEventListener('click', () => {
        labels2.forEach(l => l.classList.remove('border-2', 'border-red-600'));
        label.classList.add('border-2', 'border-red-600');
    });
});
