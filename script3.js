var form = document.querySelector("#form1");
const allUsersData = [];

const resetForm = function () {
  const name = document.getElementById('name');
  name.value = "";

  const email = document.getElementById('email');
  email.value = "";

  const website = document.getElementById('website');
  website.value = "";

  const image = document.getElementById('image');
  image.value = "";

  const genderEl = document.querySelectorAll('input[name="gender"]');
  for (const rb of genderEl) {
    rb.checked = false;
  }

};


const getData = function () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const website = document.getElementById('website').value;
  const image = document.getElementById('image').value;
  let gender;

  const genderEl = document.querySelectorAll('input[name="gender"]');
  for (const rb of genderEl) {
    if (rb.checked) {
      gender = rb.value;
      break;
    }
  };
  return { name, email, website, image, gender };
};


form.addEventListener("submit", function (event) {
  event.preventDefault();
    const data = getData();
    allUsersData.push(data);
    printResult(data);
    resetForm();
});



function printResult(data) {
  const resultEl = document.getElementById('enrolled-students');
  let sectionHeading = null;
  if (allUsersData.length == 1) {

    sectionHeading = document.createElement('div');
    const description = document.createElement('p');
    description.innerHTML = "Description";
    description.className = "description";

    const image = document.createElement('p');
    image.innerHTML = "Image"
    image.className = "Image";

    sectionHeading.className = "sectionHeading";
    sectionHeading.append(description, image);
  };

  const wrapper = document.createElement('div');
  wrapper.className = "wrapper";



  const textInfoContainer = document.createElement('div');
  textInfoContainer.className = "textInfoContainer";

  const imageContainer = document.createElement('div');
  imageContainer.className = "imageContainer";

  const imageHyperlink = document.createElement('a');
  imageHyperlink.href = data.image;

  let name = document.createElement('p');
  name.className = "infoText userName";
  name.innerHTML = data.name;

  let gender = document.createElement('p');
  gender.className = "infoText gender";
  gender.innerHTML = data.gender;

  let email = document.createElement('p');
  email.className = "infoText email";
  email.innerHTML = data.email;

  let website = document.createElement('a');
  website.className = "infoText website";
  website.innerHTML = data.website;
  website.href = data.website;

  let userImage = document.createElement('img');
  userImage.className = "userImage";
  userImage.src = data.image;


  textInfoContainer.append(name, gender, email, website);
  imageHyperlink.appendChild(userImage);
  imageContainer.appendChild(imageHyperlink);

  wrapper.append(textInfoContainer, imageContainer);

  if (sectionHeading == null) {
    resultEl.append(wrapper);
  } else {
    resultEl.append(sectionHeading, wrapper)
  };

};