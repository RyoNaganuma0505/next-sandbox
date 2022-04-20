export default (req, res) => {
  res
    .status(200)
    .json({
      text: "このようにJSONを返すように設定すれば、REST APIのサーバとしても機能する",
    });
};
