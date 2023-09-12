export const getAllPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
  }
export const getPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    );
  };
export const getCommentsOfPost =  (id) => {
    //  await new Promise(resolve => setTimeout(resolve, 3000))
      return fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      ).then((res) => res.json());
    };