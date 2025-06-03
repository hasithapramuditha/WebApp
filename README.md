# WebApp

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to the database
const database = firebase.database();

document.addEventListener('DOMContentLoaded', function () {
  // Reference HTML elements
  const tempValueSpan = document.getElementById('tempValue');
  const humidityValueSpan = document.getElementById('humidityValue');
  
  // Database references
  const tempRef = database.ref('dht11/temperature');
  const humidityRef = database.ref('dht11/humidity');
  
  // Temperature listener
  tempRef.on('value', (snapshot) => {
      const temperature = snapshot.val();
      tempValueSpan.textContent = temperature !== null ? temperature : '--';
      console.log("Temperature updated:", temperature);
  });

  // Humidity listener
  humidityRef.on('value', (snapshot) => {
      const humidity = snapshot.val();
      humidityValueSpan.textContent = humidity !== null ? humidity : '--';
      console.log("Humidity updated:", humidity);
  });

});
