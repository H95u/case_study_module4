function login() {
    let username = $("#username").val()
    let password = $("#password").val()

    let user = {
        username: username,
        password: password
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/auth/login",
        type: "POST",
        data: JSON.stringify(user),
        success: function (data) {
            sessionStorage.setItem("token", data.token)
            // findAll()
            $("#username").val("")
            $("#password").val("")

            let content = `<span>${data.name}</span> | <button type="button" class="btn btn-light" onclick="logout()">Log out</button>`
            $("#navbar-auth").html(content)
        },
        error: function () {
            alert("login failed!")
        }
    })
}

function logout() {
    sessionStorage.clear()
    let content = `<div class="search-box">
        <input type="text" placeholder="Tìm kiếm" class="search-input">
        <button class="search-button"><i class="fa fa-search"></i></button>
    </div>
    <a href="" class="navbar-item"></a>
    <button class="navbar-item"> Đăng nhập</button>
    |
    <button class="navbar-item"> Đăng ký</button>`;
    $("#navbar-auth").html(content);
}


function register() {
    let username = $("#username").val()
    let password = $("#password").val()

    let user = {
        username: username,
        password: password,
        roles: [
            {
                id: 2
            }
        ]
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/auth/register",
        type: "POST",
        data: JSON.stringify(user),
        success: function(data) {
            $("username-r").val("")
            $("password-r").val("")
            alert("Register successfully!")
        }
    })
}