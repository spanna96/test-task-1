export const getFomattedDate = (dateNumber) => {
  const date = new Date(dateNumber);
  let options;

  if (isToday(date)) {
    options = {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
  } else {
    options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
  }

  return Intl.DateTimeFormat("en-US", options).format(date);
};

const isToday = (someDate) => {
  const today = new Date();

  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};