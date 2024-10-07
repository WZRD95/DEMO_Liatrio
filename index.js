const express = require('express')
const app = express()
const jsonminify = require('jsonminify')
const get_date = new Date().toLocaleString()
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`\n  Run time start => ${get_date}\n`);
    console.log(`  Server running on port ${PORT}\n`);
});

app.get('/', function (request, response){
    var time_out = new Date().toLocaleString();
    const my_Json = { "message": "My name is Joel", "timestamp": time_out }
    const minified_Json = jsonminify(JSON.stringify(my_Json));

    if(request)  
    { 
        console.log("New Request..."); 
        console.log("    Log-> " + request.header('user-agent') + "\n"); 
    }

    response.send(minified_Json);
})

// minify bases off this 
//      https://www.npmjs.com/package/jsonminify

// the index name convention base off of the idea that it will work with pakage JSON
//      https://stackoverflow.com/questions/19850028/what-naming-conventions-exist-for-the-primary-node-js-file


// fixing the express install 
// i think this is the right way to do it to make sure the docker makes image with no errors
//      https://expressjs.com/en/starter/installing.html