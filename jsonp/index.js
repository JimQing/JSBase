jsonp('http://localhost:3000/jsonp', null, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(data);
    }
});