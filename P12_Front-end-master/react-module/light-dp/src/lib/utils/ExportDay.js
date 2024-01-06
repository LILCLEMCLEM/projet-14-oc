const day = ["dim", "lu", "mar", "mer", "jeu", "ven", "sam"];

export function GetCalendar(year, month) {
  let lastDay = new Date(year, month + 1, 0);

  let firstDay = new Date(year, month, 1);
  const OrderedDate = {
    dim: [],
    lu: [],
    mar: [],
    mer: [],
    jeu: [],
    ven: [],
    sam: [],
  };
  let index = 1;
  for (let i = firstDay.getDay(); i > 0; i--) {
    let tMonth = new Date(year, month, 1 - index);
    console.log(firstDay.getDay());
    OrderedDate[day[tMonth.getDay()]].push(" ");
    index++;
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    OrderedDate[day[date.getDay()]].push(date.getDate());
  }
  index = 1;
  for (let i = lastDay.getDay(); i < 6; i++) {
    const date = new Date(new Date(year, month + 1, index));
    OrderedDate[day[date.getDay()]].push(" ");
    index++;
  }

  return OrderedDate;
}
