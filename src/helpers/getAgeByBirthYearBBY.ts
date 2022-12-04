import isValidDateFormatBBY from "./isValidDateFormatBBY";

const getAgeByBirthYearBBY = (birthYearBBY: string) => {
  if (!isValidDateFormatBBY(birthYearBBY)) return null;

  const currentYear = new Date().getFullYear();

  if (birthYearBBY[0] === "-") {
    return currentYear - 1 - parseInt(birthYearBBY.slice(1), 10);
  }
  return currentYear - parseInt(birthYearBBY, 10);
};

export default getAgeByBirthYearBBY;
