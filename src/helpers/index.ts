let currenciesArray = ["USD", "UZS", "EUR"];

export function filterData(data: any) {
  let conversion = data?.conversion_rates
    ? Object.entries(data.conversion_rates)
        .filter(([rate]) => rate !== null && rate !== undefined)
        .map(([currency, rate]) => ({ currency, rate }))
    : [];

  const filteredConversions = conversion.filter(({ currency }) =>
    currenciesArray.includes(currency)
  );

  return filteredConversions;
}
