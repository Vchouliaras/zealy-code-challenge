import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import CommentForm from '@/components/comment-form';
import CommentList from '@/components/comment-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Circle, type CircleProps } from '@/components/ui/circle';
import { type CommentProps } from '@/components/ui/comment';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useWindowResize } from '@/lib/useWindowResize';

function CommentInArea() {
  const [innerWidth, innerHeight] = useWindowResize();

  const [comments, setComments] = useState<CommentProps[]>([]);
  const [openPopover, setOpenPopover] = useState(false);

  const [circles, setCircles] = useState<CircleProps[]>([]);
  const [circlePosition, setCirclePosition] = useState<Omit<CircleProps, 'id'>>({ x: 0, y: 0 });

  const handleFormSubmit = (value: string) => {
    setComments((prev) => [
      ...prev,
      { id: String(prev.length + 1), author: 'Foo Bar', created_at: Date.now(), content: value },
    ]);
  };

  const handleTriggerElement = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    if (!openPopover) {
      setCirclePosition({ x: clientX, y: clientY });
      setCircles((prev) => [...prev, { id: Date.now(), x: clientX, y: clientY }]);
    }
  };

  useEffect(() => {
    setCircles((prev) => prev.map((circle) => ({ ...circle, x: circle.x + innerWidth * 0.05 })));
  }, [innerHeight, innerWidth]);

  return (
    <Popover
      open={openPopover}
      onOpenChange={setOpenPopover}
    >
      {circlePosition.x !== 0 &&
        circles.map((circle) => (
          <Circle
            key={circle.id}
            id={circle.id}
            x={circle.x}
            y={circle.y}
          />
        ))}

      <PopoverTrigger asChild>
        <Card
          className="w-[550px] cursor-pointer"
          onClick={handleTriggerElement}
        >
          <CardHeader>
            <CardTitle>Formulario</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </CardContent>
        </Card>
      </PopoverTrigger>

      <PopoverContent
        className="w-[350px]"
        align="center"
      >
        <PopoverClose asChild>
          <div className="relative right-[-5px] top-[-5px] mb-2 flex w-full cursor-pointer flex-row justify-end">
            <X size={20} />
          </div>
        </PopoverClose>
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleFormSubmit} />
      </PopoverContent>
    </Popover>
  );
}

export default CommentInArea;
