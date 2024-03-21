// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },{
        
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },{
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Anhui',
                capital: 'Hefei',
                largestCity: 'Hefei',
                area: 140200,
            },
            {
                name: 'Fujian',
                capital: 'FUzhou',
                largestCity: 'Xiamen',
                area: 	121400,
            },
            {
                name: 'Jiangsu',
                capital: 'Nanjing',
                largestCity: 'Nanjing',
                area: 102600,
            },
        ],
    },
    {
        country: 'The United Kingdom',
        capital: 'London',
        largestCity: 'London',
        subdivisionName: 'nation',
        subdivisions: [
            {
                name: 'England',
                capital: 'London',
                largestCity: 'London',
                area: 132930,
            },
            {
                name: 'Scotland',
                capital: 'Edinburgh',
                largestCity: 'Glasgow',
                area: 80231,
            },
            {
                name: 'Wales',
                capital: 'Cardiff',
                largestCity: 'Cardiff',
                area: 21218,
            },
        ],
    },
]

// Your code goes below
// Get reference to the <main> tag
const mainElement = document.querySelector('main');

// Iterate over the GEOGRAPHY_LIST array
GEOGRAPHY_LIST.forEach(country => {
    // Create a container for each country
    const countryContainer = document.createElement('div');
    countryContainer.classList.add('country');

    // Create an <h2> element for the country name
    const countryName = document.createElement('h2');
    countryName.textContent = country.country;
    countryContainer.appendChild(countryName);

    // Create a <ul> element for the subdivisions
    const subdivisionsList = document.createElement('ul');

    // Iterate over the subdivisions array for each country
    country.subdivisions.forEach(subdivision => {
        // Create an <li> element for each subdivision
        const subdivisionItem = document.createElement('li');
        subdivisionItem.textContent = `${subdivision.name} - Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} km²`;
        subdivisionsList.appendChild(subdivisionItem);
    });

    // Append the subdivisions list to the country container
    countryContainer.appendChild(subdivisionsList);

    // Append the country container to the <main> tag
    mainElement.appendChild(countryContainer);

    // Add a line break after each country container to separate them
    mainElement.appendChild(document.createElement('hr'));
});

