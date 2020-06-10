axios.get('https://api.github.com/users/Dellinghausen')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.warn(error)
    })