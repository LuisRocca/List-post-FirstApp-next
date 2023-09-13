const BASEURL = 'https://jsonplaceholder.typicode.com/posts';



export const getAllPost = () => {
    return fetch(BASEURL).then(res => res.json())
  };


  export const getPost = (id) => {
    return fetch(`${BASEURL}/${id}`).then((res) =>res.json())
  };


  export const getCommentsOfPost = (id) => {
      return fetch(`${BASEURL}/${id}/comments`).then((res) => res.json())
  };