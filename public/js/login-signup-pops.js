const baseUrl = 'http://localhost:3000';

window.onload = async () => {
    console.log(`Base url: ${baseUrl}`);
    //make a request
    const response = await axios.get(`${baseUrl}/profile`);
    console.log(response);
}


console.log('Hello, AXIOS');