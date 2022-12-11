import CommentText from './CommentText';
import Avatar from './Avatar';
import UserName from './UserName';

function Comment({
 url, name, comment, date, alt, 
}) {
    return (
      <div className="userComment">
        <div className="Avatar">
          <Avatar url={url} alt={alt} />
        </div>
        <div className="UserName">
          <UserName name={name} />
        </div>
        <div className="comment">
          <CommentText comment={comment} />
        </div>
        <div className="date">
          {date}
        </div>
      </div>
    );
}

export default Comment;
