  

var productSection = document.getElementById("productSection");

async function fetchData() {
  try {
    let productApi = await fetch("https://fakestoreapi.com/products");
    productApi = await productApi.json();

    for (var i = 0; i < productApi.length; i++) {
      // Truncate title and description if too long
      const truncatedTitle =
        productApi[i].title.length > 20
          ? productApi[i].title.substring(0, 20) + "..."
          : productApi[i].title;

      const truncatedDescription =
        productApi[i].description.length > 100
          ? productApi[i].description.substring(0, 100) + "..."
          : productApi[i].description;

      // productSection.innerHTML += `<div class="card" style="width: 18rem ">
      //   <img src="${productApi[i].image}" class="card-img-top" alt="..." 
      //        style="height: 200px; width: auto; object-fit: contain;" />
      //   <div class="card-body">
      //     <h5 class="card-title">${truncatedTitle}</h5>
      //     <p class="card-text">
      //     ${truncatedDescription}
      //     </p>
      //     <a href="#" class="btn btn-primary">Go somewhere</a>
      //   </div>
      // </div>`;
      productSection.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100">
      <img src="${productApi[i].image}" class="card-img-top" alt="..." 
           style="height: 200px; width: auto; object-fit: contain;" />
      <div class="card-body">
        <h5 class="card-title">${truncatedTitle}</h5>
        <p class="card-text">${truncatedDescription}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`;

    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();


// signup js start
var userName = document.getElementById("username");
var userEamil = document.getElementById("email");
var userPass = document.getElementById("password");


function signupFunc() {
    if (userName.value == "" || !userEamil.value || !userPass.value) {
      alert("Please fill all the fields");
      return;
    }
    let usersArray = localStorage.getItem("users") || [];
    console.log("wiuout parse", usersArray);
    if (usersArray.length != 0) {
      usersArray = JSON.parse(usersArray);
    }
    for (var i = 0; i < usersArray.length; i++) {
      if (userEamil.value == usersArray[i].userEamil) {
        alert("Email already in use");
        return;
      }
    }
    const userObj = {
      userName: userName.value,
      userEamil: userEamil.value,
      userPass: userPass.value,
    };
    usersArray.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersArray));
    userName.value = "";
    userEamil.value = "";
    userPass.value = "";
    alert("Signed up successfully");
  }
// signup js end


// login js start


var loginUsername = document.getElementById("loginUsername");
var loginPassword = document.getElementById("loginPassword");





function loginFunc() {
    let usersArray = localStorage.getItem("users");
    if (usersArray == null) {
      alert("You are not signed up");
      return;
    }
    usersArray = JSON.parse(usersArray);
    var flag = false;
    for (var i = 0; i < usersArray.length; i++) {
      if (
        loginUsername.value == usersArray[i].userName &&
        loginPassword.value == usersArray[i].userPass
      ) {
        flag = true;
        alert("Logged in successfully");
        window.location.replace("/index.html");
      }
    }
    if (!flag) {
      alert("Please enter correct credentials");
    }
  }

// login js end