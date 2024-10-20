@@ -0,0 +1,23 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="weather-container">
        <h1>Weather App</h1>
        <div id="search-container">
            <input type="text" id="city-input" placeholder="Enter city name" />
            <button id="search-button" class="btn">Get Weather</button>
        </div>
        <div id="weather-result">
            <!-- Weather information will be dynamically loaded here -->
        </div>
    </div>

    <script type="module" src="index.mjs"></script>
</body>
</html>