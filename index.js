

function submitData (name, email) {
    const configObj = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            Accept: 'application/json'
        },
        body:JSON.stringify( {
            name: "Steve", 
            email: "steve@steve.com"
        }) 
    }
    fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(body => toDom(body.id))
    .catch(error => {
        let span = document.createElement('span')
        span.innerText = "Unauthorized Access"
        document.body.append(span)
    })
}

function toDom(theID) {
    document.getElementsByTagName('body')[0].innerHTML = theID; 
}


submitData(name, email); 
