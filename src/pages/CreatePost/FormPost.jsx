const tags = [
  "Technology",
  "Health",
  "Travel",
  "Food",
  "Education",
  "Finance",
  "Sports",
  "Entertainment",
  "Lifestyle",
  "Science",
];

export const FormPost = () => {
  return (
    <>
      <div className="row mb-3">
        <label for="inputTitleOfPost" className="col-sm-2 col-form-label">
          Title of Post
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputTitleOfPost" />
        </div>
      </div>
      <div className="row mb-3">
        <label for="inputWriter" className="col-sm-2 col-form-label">
          Writer
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputWriter" />
        </div>
      </div>

      <legend className="col-form-label col-sm-2 pt-0">Tags</legend>

      <div className="row mb-3">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="col-sm-2 offset-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" for="gridCheck1">
                  {tag}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
