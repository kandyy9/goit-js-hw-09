    let formData = {
        email: "",
        message: ""
    };

    const form = document.querySelector(".feedback-form");
    const localStorageKey = "feedback-form-state";

    const updateLocalStorage = () => {        
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    };

    const loadFormData = () => {
        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            formData = {
                email: parsedData.email || "",
                message: parsedData.message || ""
            };
            form.elements.email.value = formData.email;
            form.elements.message.value = formData.message;        
        } 
    };

    form.addEventListener("input", (evt) => {
        formData[evt.target.name] = evt.target.value;
        updateLocalStorage();
    });

    form.addEventListener("submit", (evt) => {
        evt.preventDefault();

        formData.email = form.elements.email.value;
        formData.message = form.elements.message.value;

        if (!formData.email || !formData.message) {
            alert("Please fill in all fields");
            return;
        }

        console.log(formData);

        localStorage.removeItem(localStorageKey);
        formData = {
            email: "",
            message: ""
        };
        form.reset();
    });

    loadFormData();
