// Example JSON data
const exampleJSONData = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "city": "New York",
      "country": "USA"
    }
  };
  
  // Example array data
  const exampleArrayData = [1, 2, 3, 4, 5];
  
  // Function to fetch data from an API
  async function fetchDataFromAPI(apiURL) {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      return null;
    }
  }
  
  // Function to handle JSON data
  function handleJSONData(jsonData) {
    // Example: Accessing properties of JSON data
    console.log('Name:', jsonData.name);
    console.log('Age:', jsonData.age);
    console.log('Email:', jsonData.email);
    console.log('City:', jsonData.address.city);
    console.log('Country:', jsonData.address.country);
  }
  
  // Function to handle array data
  function handleArrayData(arrayData) {
    // Example: Looping through array data
    arrayData.forEach((item, index) => {
      console.log(`Item ${index + 1}: ${item}`);
    });
  }
  
  // Example usage
  (async () => {
    // Fetch data from API
    const apiURL = 'https://api.example.com/data';
    const apiData = await fetchDataFromAPI(apiURL);
  
    // Handle JSON data
    if (apiData) {
      handleJSONData(apiData);
    }
  
    // Handle array data
    handleArrayData(exampleArrayData);
  })();
  