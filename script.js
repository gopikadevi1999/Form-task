const formEl = document.forms.domform;
const {
  fname,
  lname,
  address,
  pincode,
  type1,
  type2,
  choose1,
  choose2,
  choose3,
  choose4,
  choose5,
  state,
  country,
} = formEl.elements;

formEl.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log(...new FormData(formEl));
    //const { fname, lname, address, pincode, type1, type2, choose1, choose2, choose3, choose4, choose5, state, country } = formEl.elements;
    console.log("Form has been submitted!")
    formEl.reset();
})