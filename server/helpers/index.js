module.exports = {
  isDataEmpty: (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  },

  isValueEmpty: (data) =>
    Object.values(data).some((key) => key === null || key === ""),

  isNotAnId: (Id) => isNaN(Id),
};
