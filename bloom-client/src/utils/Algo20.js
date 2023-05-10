import Api from "./Api";
const gradeIsOn = 20;

const Algo20 = async _id => {
  // console.log("Algo20 _id", _id);
  const votes = await Api.getVotes();
  let points = 0;
  let numberOfVotes = 0;
  // console.log("votes", votes);
  for (var i = 0; i < votes.length; i++) {
    if (votes[i].deputy._id === _id) {
      // console.log(i);
      if (
        (votes[i].decision === "for" && votes[i].law.protect === true) ||
        (votes[i].decision === "against" && votes[i].law.protect === false)
      ) {
        points += 3;
        numberOfVotes += 1;
        // console.log("<< PROTEGE points", points);
      }
      if (
        (votes[i].decision === "for" && votes[i].law.protect === false) ||
        (votes[i].decision === "against" && votes[i].law.protect === true)
      ) {
        points += 0;
        numberOfVotes += 1;
        // console.log("<< DETRUIT points", points);
      }
      if (votes[i].decision === "absence") {
        points += 0.5;
        numberOfVotes += 1;
        // console.log("<< ABCENCE points", points);
      }
      if (votes[i].decision === "abstention") {
        points += 1;
        numberOfVotes += 1;
        // console.log("<< ABTENTION points", points);
      }
    }
  }

  const finalNote = ((points / (numberOfVotes * 3)) * gradeIsOn).toFixed(0);
  // console.log("---");
  // console.log(
  //   `deputy with id : ${_id} has ${points} points and has voted ${numberOfVotes} times. FinalNote is ${finalNote}`
  // );
  return finalNote;
};

export default Algo20;
