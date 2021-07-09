/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  let activePage = 1;
  let tottalPages;

//   function userData(page) {
//       fetch('https://reqres.in/api/unknown')
//           .then(response => response.json())
//           .then(info => {
//               let ul = document.getElementById('list');
//               let fragment = document.createDocumentFragment()
//               let img = document.getElementById('responseimg');

//               img.setAttribute('src', "img/success.PNG")
//               info.data.map(item => {
//                   let li = document.createElement('li');
//                   let id = document.createElement('h1');
//                   let name = document.createElement('h2');
//                   let year = document.createElement('h3');
//                   let color = document.createElement('h4');
//                   let pantone_value = document.createElement('h5');
//                   id.textContent = item.id;
//                   name.textContent = item.name;
//                   year.textContent = item.year;
//                   color.textContent = item.color;
//                   pantone_value.textContent = item.pantone_value;

//                   li.appendChild(id)
//                   li.appendChild(name)
//                   li.appendChild(year)
//                   li.appendChild(color)
//                   li.appendChild(pantone_value)


//                   li.classList.add('listItem');
//                   fragment.appendChild(li)
//               })
//               tottalPages = info.total_pages;
//               ul.innerHTML = "";
//               ul.appendChild(fragment)
//           })
//           .catch(error => {
//               let img = document.getElementById('responseimg');
//               img.setAttribute('src', "img/error.PNG")
//               let errorMessage = document.createElement('h1');
//               errorMessage.textContent = error
//               errorMessage.style.color = 'red'
//               document.body.appendChild(errorMessage)
//           })
//   }
//   userData(activePage)
  
  let ul = document.getElementById('list');
  let fragment = document.createDocumentFragment()
  fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
	return response.json();
}).then(data => {
    data.map(item =>{
        let li = document.createElement('li');
        li.className = "li1"
        let id = document.createElement('h1');
        id.textContent = item.id + " - " +item.name+ " - " +item.username+ " - " +item.email


        li.appendChild(id)
        li.classList.add('listItem');
                  fragment.appendChild(li)
    })
	// This is the JSON from our response
    ul.innerHTML = "";
    ul.appendChild(fragment)
	console.log(data);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});
document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};

    let form = event.target;

    let username = form.querySelector('[name="username"]').value;

    if (username.length < 2) {
        errors.username = 'Min 2 letters';
    }

    let password = form.querySelector('[name="password"]').value;
    let password2 = form.querySelector('[name="password2"]').value;

    if (password.length < 8) {
        errors.password = 'Invalid Password';
    }

    if (password != password2) {
        errors.password = 'Passwords do not match';
    }

    let agree = form.querySelector('[name="agree"]').checked;

    if (!agree) {
        errors.agree = 'You must agree terms and codnitions';
    }

    let gender = false;

    form.querySelectorAll('[name="gender"]').forEach(item => {
        if (item.checked) {
            gender = true;
        }
    });

    if (!gender) {
        errors.gender = 'Please select gender';
    }

    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = ' ';
    });

    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);


        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }
     }

    if (Object.keys(errors).length === 0) {
        form.submit();
    }
    console.log(errors);


})