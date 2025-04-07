let cities = ["Delhi", "Bombay", "Bangalore"];

cities[1] = "Mumbai";

cities;


const oldCities = ["Delhi", "Bombay", "Bangalore"];

const newCities = oldCities.map((city) => {
    if (city === "Bombay") return "Mumbai";
    if (city === "Bangalore") return "Bengaluru";
    return city;
});

newCities;
oldCities;