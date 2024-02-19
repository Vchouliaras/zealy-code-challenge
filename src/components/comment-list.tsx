import { Comment, type CommentProps } from '@/components/ui/comment';

function CommentList({ comments }: { comments: CommentProps[] }) {
  return (
    <section className="flex max-h-[300px] w-full flex-col overflow-y-scroll">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </section>
  );
}

export default CommentList;
