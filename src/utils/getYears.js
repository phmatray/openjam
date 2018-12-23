const getYears = years =>
  years
    .reverse()
    .map(_ => (_.from === _.to ? `${_.from}` : `${_.from}-${_.to}`))
    .join(', ');

export default getYears;
