
export const urlComments =
  "https://64a5872d00c3559aa9bfdad8.mockapi.io/law-app/question";
export const urlreview = 
'https://64a5872d00c3559aa9bfdad8.mockapi.io/law-app/review';

export const getComments = async () => {
  const response = await fetch(urlComments);

  return await response.json();
};

export const addComments = async (comment) => {
  return await fetch(urlComments, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
};

export const editComments = async (newcomment) => {
  return await fetch(`${urlComments}/${newcomment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newcomment),
  });
};

export const addReview = async (review) => {
  return await fetch(urlreview, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });
};

export const getReviews = async () => {
  const response = await fetch(urlreview);

  return await response.json();
};


export const deleteComment = async (id) => {
  await fetch(`${urlComments}/${id}`, {
    method: "DELETE",
  });
};
