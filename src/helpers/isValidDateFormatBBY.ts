const isValidDateFormatBBY = (date: string) => {
  const regex = /\d*BBY/;
  return regex.test(date);
};

export default isValidDateFormatBBY;
