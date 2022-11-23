$(document).ready(function () {
    // $('#quoteList').show();
    $('#quoteDetails').hide();
    $('#loader').show();

    getQuotes();
});

function getQuotes() {
    $.ajax({
        url: 'https://dummyjson.com/quotes',
        type: 'GET',
        success: function (res) {
            $('#loader').hide();
            let temp = `<thead>
            <tr>
                <th>#</th>
                <th>Quote</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>`
            for (quote of res.quotes) {
                let data = `
            <tr id="redirectSingle">
                <td>${quote.id}</td>
                <td>${quote.quote}</td>
                <td>${quote.author}</td>
                <td class="d-flex">
                    <a class="mx-1 quote-table" onclick="viewQuote(${quote.id})">View</a>
                </td>
            </tr>`;
                temp += data;
            }
            $('#quoteData').html(temp);
        },
        error: function (err) { }
    })
}


function viewQuote(id) {
    $('#loader').show();
    $('#quoteList').hide();
    $('#quoteDetails').show();
    $.ajax({
        url: `https://dummyjson.com/quotes/${id}`,
        type: 'GET',
        success: function (data) {
            if (data) {
                $('#loader').hide();
                $('#id').text(data.id);
                $('#quote').text(data.quote);
                $('#author').text("-" + data.author);
            }
        },
        error: function (err) {
            alert(err);
        }
    })
}

function redirectHome() {
    window.location.reload();
}




