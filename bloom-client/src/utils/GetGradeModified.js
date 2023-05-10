const GetGrade = (deputyId, votes, categories, laws) => {
  const scale = 100;
  const doGoodVote = 3;
  const doBadVote = 0;
  const doAbsenceVote = 0.5;
  const doNotVote = 1;
  const votesFromCurrentDeputy = votes.filter(vote => {
    return vote.deputy._id === deputyId && vote;
  });

  let deputyPoints = 0;
  let numberOfVotes = 0;
  let totalOfVotes = 0;
  let actionOfVote = 0;
  let arrayOfSubTotals = [];

  categories.forEach(category => {
    laws.forEach(law => {
      totalOfVotes = totalOfVotes + 1;
      numberOfVotes = numberOfVotes + 1;
      if (category._id === law.category) {
        votesFromCurrentDeputy.forEach(vote => {
          if (law._id === vote.law._id) {
            if (
              (vote.decision === "for" && vote.law.protect === true) ||
              (vote.decision === "against" && vote.law.protect === false)
            ) {
              deputyPoints += doGoodVote;
              actionOfVote++;
            }
            if (
              (vote.decision === "for" && vote.law.protect === false) ||
              (vote.decision === "against" && vote.law.protect === true)
            ) {
              deputyPoints += doBadVote;
              actionOfVote++;
            }
            if (vote.decision === "abstention") {
              deputyPoints += doNotVote;
              actionOfVote++;
            }
          }
        });
      }
    });

    const lawsFromCurrentCategory = laws.filter(law => {
      return category._id === law.category && law;
    });
    const nbOfCurrentLaws = lawsFromCurrentCategory.length;

    const maxNote = nbOfCurrentLaws * 3;

    if (actionOfVote === 0) {
      deputyPoints += doAbsenceVote * nbOfCurrentLaws;
    }
    let coefficient = scale / maxNote;
    if (coefficient === Infinity) {
      coefficient = 0;
    }

    const subTotal = deputyPoints * coefficient;

    if (nbOfCurrentLaws !== 0) {
      arrayOfSubTotals.push(subTotal);
    }

    deputyPoints = 0;
    numberOfVotes = 0;
    actionOfVote = 0;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let finalNote = 0;
  if (arrayOfSubTotals.length === 0) {
    return finalNote;
  }
  finalNote = Number(
    (arrayOfSubTotals.reduce(reducer) / arrayOfSubTotals.length).toFixed(0)
  );

  return finalNote;
};

export default GetGrade;
