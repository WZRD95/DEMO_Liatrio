const express = require('express')
const app = express()
const jsonminify = require('jsonminify')
const PORT = process.env.PORT || 80;

app.listen(PORT);

app.get('/', function(request , response){
    var time_out = new Date().getTime();
    const my_Json = { message: 'My name is NOTme', timestamp: time_out }
    const minified_Json = jsonminify(JSON.stringify(my_Json));
    
    response.send(minified_Json);
})

/*** tests didnt like this ***  

app.listen(PORT, () => {
    console.log(`\n  Run time start => ${get_date}\n`);
    console.log(`  Server running on port ${PORT}\n`);
});

app.get('/', function (request, response){
    var time_out = new Date().getTime();
    const my_Json = { "message": "My name is Joel", "timestamp": time_out }
    const minified_Json = jsonminify(JSON.stringify(my_Json));

    if(request)  
    { 
        console.log("New Request..."); 
        console.log("    Log-> " + request.header('user-agent') + "\n"); 
    }

    response.send(minified_Json);
})

***************************************************************************/


// minify bases off this 
//      https://www.npmjs.com/package/jsonminify

// the index name convention base off of the idea that it will work with pakage JSON
//      https://stackoverflow.com/questions/19850028/what-naming-conventions-exist-for-the-primary-node-js-file


// fixing the express install 
// i think this is the right way to do it to make sure the docker makes image with no errors
//      https://expressjs.com/en/starter/installing.html

// fixing the node errors with docker
// fix based on this one here in the man pages 
// i think it was in there missing dependencies 
// **APPENDED** 
// Yes, there was a missing JSON minify was not there docker was crashing 
//      https://www.docker.com/blog/getting-started-with-docker-using-node-jspart-i/

// possable help in the future 
//      https://blog.valsa.solutions/container-maintenance-with-docker-compose-handling-crashes-in-nodejs-environments

// fixing error with the wrong version in the packages 
// this was an error from docker
//      https://stackoverflow.com/questions/16827858/error-npm-warn-package-json-no-repository-field

// got the work flow dispactch to work with button for testing 
// i did end up using the web git to make the action file to run 
//      https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#workflow_dispatch

// good outline for secrets
// here is the one i looked at and easy to fallow 
// i did see a video about this as well so this just helps confirms it works 
//      https://stackoverflow.com/questions/77815378/cant-push-image-to-docker-hub-via-github-actions-using-token