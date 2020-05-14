export const addVote = (oneliner) => {
  return function (dispatch, getState) {
    const state = getState();

    let updatedVotes = state.o.guest;

    let newVote = updatedVotes.filter((item) => item.id === oneliner.id);
    newVote[0].upvote += 1;

    updatedVotes = [
      ...updatedVotes.filter((vote) => vote.id !== oneliner.id),
      newVote[0],
    ];

    dispatch({
      type: "VOTE_ONELINER",
      guest: updatedVotes,
    });
  };
};
