export function formatDateToCustomString(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  return dateFormatter.format(date);
}

// Example usage:
const currentDate = new Date();
const formattedDate = formatDateToCustomString(currentDate);
console.log(formattedDate); // Output: Sunday 12th November, 2023

export function kelvinToCelsius(kelvin) {
  // Kelvin to Celsius conversion formula
  const celsius = kelvin - 273.15;
  return celsius.toFixed(); // Round to 2 decimal places
}

export function capitalizeEveryWord(sentence) {
  return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
}
