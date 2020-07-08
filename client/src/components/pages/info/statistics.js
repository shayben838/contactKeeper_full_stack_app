const calculateNumbers = (contacts, loading) => {
  let dataStatistics = {
    first: 0,
    second: 0,
    companies: [],
    preservation: [],
    improvement: [],
  };
  const { companies, preservation, improvement } = dataStatistics;
  if (contacts !== null && !loading) {
    contacts.forEach((contact) => {
      companies.push(contact.name);
      if (contact.firstInterview) {
        dataStatistics.first += 1;
      }
      if (contact.conservationPoint_1) {
        preservation.push(contact.conservationPoint_1);
      }
      if (contact.conservationPoint_2) {
        preservation.push(contact.conservationPoint_2);
      }
      if (contact.pointToImprove_1) {
        improvement.push(contact.pointToImprove_1);
      }
      if (contact.pointToImprove_2) {
        improvement.push(contact.pointToImprove_2);
      } else if (contact.secondInterview) {
        dataStatistics.second += 1;
      }
    });
  }
  return dataStatistics;
};

export { calculateNumbers };
