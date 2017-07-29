//Listen for form Submit

//this inline function will save the bookmark
document.getElementById('myForm').addEventListener('submit', function saveBookmark(e) {
    // console.log('eureka!!!');

    //Get Form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    //object vid 16:02
    var bookmark = {
        name: siteName,

    }

    //this prevent the form from submitting
    e.preventDefault();
});