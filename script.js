const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
  
    const tempselected = document.getElementById('temp_diff');
  
    const valueTemp = tempselected.options[tempselected.selectedIndex].value;
  
    const celToFah = (cel) => {
      let fahrenheit = Math.round((cel * 9) / 5 + 32);
      return fahrenheit;
    };
  
    const fahToCel = (fehr) => {
      let celsius = Math.round(((fehr - 32) * 5) / 9);
      return celsius;
    };
  
    let result;
  
    if (valueTemp === 'cel') {
      result = celToFah(numberTemp);
      document.getElementById('resultcontainer').innerHTML = `= ${result} Fahrenheit`;
    } else {
      result = fahToCel(numberTemp);
      document.getElementById('resultcontainer').innerHTML = `= ${result} Celsius`;
    }
  };
  