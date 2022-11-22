//Syntax
//===============START=========================
// $.ajax({
//     url: 'endpoint here',
//     type:'http method (GET/POST/PUT/DELETE)',
//     data:'object/arra/string'
//     success: function(){},
//     error:function(){}
// });

// -----------------OR--------------------
// $.get({
//     'endpoint here',
//     'http method (GET/POST/PUT/DELETE)',
//     data:'object/arra/string'
//     function(){},
// });

// ===============END==========================

// for GET method 
//start
$("#getData").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        success: function (users) {
            console.log(users);
            let temp = `<thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          `;
            for (user of users) {
                let res = `<tr>
              <td scope="row">${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
            </tr>`;
                temp += res;
            }
            $("#userData").html(temp);
        },
        error: function (error) {
            console.log(error);
            let errMsg = 'data not populated. please try again';
            alert(errMsg);
        },
    });
});
//end

//for POST method
//start
$('#postData').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: {
            "userId": 1,
            "title": "occaecati excepturi optio reprehenderit",
            "body": "molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        success: function (res) {
            console.log(res);
            alert('Post call is working. check in network or console');
        },
        error: function (err) { }
    })
});
//end

//for PUT method
//start
$('#putData').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/100',
        type: 'PUT',
        data: {
            "title": "RUPESH optio reprehenderit",
            "body": "molestiae chaning.......... quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        success: function (res) {
            console.log(res);
            alert('Put call is working. check in network or console');

        },
        error: function (err) { }
    })
});
//end

//for DELETE method
//start
$('#deleteData').click(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/100',
        type: 'DELETE',
        success: function (res) {
            console.log(res);
            alert('Delete call is working. check in network or console');
        },
        error: function (err) { }
    })
});
//end