document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelector('#contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const email = formData.get('email');
        const name = formData.get('name');
        const description = formData.get('description');
        const contractType = formData.get('contract_type');
        const company = formData.get('company');
        const programmingLanguages = formData.get('programming_languages');
        console.log('Datele formularului sunt acestea: ', email, name, description, contractType, company, programmingLanguages);
        console.log([...formData.values()]);

        const data = Object.fromEntries(formData);
        console.log(data);
        checkedLanguages = document.querySelector("[name='programming_languages']:checked").value;
        console.log(checkedLanguages);

        alert(`Un email a fost trimis la adresa ${email}. Va multumesc!`);
    });

});