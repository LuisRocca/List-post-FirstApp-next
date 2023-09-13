import { getCommentsOfPost } from '../../../service/httpServices'
export default async function PostComments ({ params }) {
  const { id } = params
  const comments = await getCommentsOfPost(id)
  return (
    <div className='bg-slate-800 p-4 rounded-lg shadow-md'>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <img
              width={50}
              height={50}
              src='https://api.dicebear.com/7.x/avataaars/svg'
              alt={`avatar of user ${comment.email}`}
            />
            <h2 className='text-xl font-bold'>{comment.name}</h2>
            <p className='text-gray-600'>{comment.body}</p>
            <span>{comment.email}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
