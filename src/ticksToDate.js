function ticksToDate(ticks) {
  return Number.isInteger(ticks) ? new Date(ticks / 1e+4 + new Date('0001-01-01T00:00:00Z').getTime()) : null;
}

module.exports = {
  ticksToDate,
};
