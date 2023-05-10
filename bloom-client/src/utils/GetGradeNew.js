const GetGrade = (id, votes, number) => {
  // Count the number of vote for each category
  var numberOfVotesPerCategory = votes.reduce(
    (acc, o) => ((acc[o.law.category] = (acc[o.law.category] || 0) + 1), acc),
    {}
  );

  var arrayNumberOfVotesPerCategory = Object.keys(numberOfVotesPerCategory).map(
    function(key) {
      return [String(key), numberOfVotesPerCategory[key]];
    }
  );

  const scale = number || 100;
  let points = 0;
  let numberOfVotes = 0;
  for (var i = 0; i < votes.length; i++) {
    if (votes[i].deputy._id === id) {
      if (votes[i].law.category === arrayNumberOfVotesPerCategory[0][i]) {
        if (
          (votes[i].decision === "for" && votes[i].law.protect === true) ||
          (votes[i].decision === "against" && votes[i].law.protect === false)
        ) {
          points += 3;
          numberOfVotes += 1;
        }
        if (
          (votes[i].decision === "for" && votes[i].law.protect === false) ||
          (votes[i].decision === "against" && votes[i].law.protect === true)
        ) {
          points += 0;
          numberOfVotes += 1;
        }
        if (votes[i].decision === "absence") {
          points += 0.5;
          numberOfVotes += 1;
        }
        if (votes[i].decision === "abstention") {
          points += 1;
          numberOfVotes += 1;
        }
      }
    }
  }
  const finalNote = Number(((points / (numberOfVotes * 3)) * scale).toFixed(0));

  return finalNote;
};

export default GetGrade;
