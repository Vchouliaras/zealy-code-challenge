import { formatDistanceToNow } from 'date-fns';
import { UserRound } from 'lucide-react';
import { memo } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export interface CommentProps {
  id: string;
  created_at: number;
  author: string;
  content: string;
  initialWidth?: number;
  initialHeight?: number;
}

const Comment = memo(({ comment }: { comment: CommentProps }) => (
  <article className="justify-space-between mb-6 flex w-full flex-row flex-nowrap content-center text-sm">
    <Avatar className="mr-5 self-start">
      <AvatarFallback>
        <UserRound size="30" />
      </AvatarFallback>
    </Avatar>
    <div className="flex w-full flex-col">
      <div className="mb-1 flex flex-row space-x-1">
        <p className="text-xs text-zinc-500">{comment.author}</p>
        <p className="text-xs text-zinc-500">-</p>
        <p className="text-xs text-zinc-500">{formatDistanceToNow(comment.created_at, { addSuffix: true })}</p>
      </div>
      <div>{comment.content}</div>
    </div>
  </article>
));

export { Comment };
