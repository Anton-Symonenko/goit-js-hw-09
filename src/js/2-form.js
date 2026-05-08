const formData = {
    email: "",
    message: ""
};

const Storage_Key = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const saveData = loadFrom(Storage_Key);

if (saveData) {
  formData.email = saveData.email || "";
  formData.message = saveData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
        formData.email = form.elements.email.value;
        formData.message = form.elements.message.value;
    
    saveToLocalStorage(Storage_Key, formData);
});


form.addEventListener('submit', e => {
    e.preventDefault();
    
     if (!formData.email || !formData.message) {
         alert("Fill please all fields");
         return;
     }
    console.log(formData);

    localStorage.removeItem(Storage_Key);
        formData.email = "";
        formData.message = "";
    
     form.reset();
});


function loadFrom(key) {
  const jsonData = localStorage.getItem(key);
   try {
    return JSON.parse(jsonData);
  } catch (error) {
    console.log("error");
    return null;
   }
}

function saveToLocalStorage(key, value) {
  const saveJson = JSON.stringify(value);
  localStorage.setItem(key, saveJson);
}







