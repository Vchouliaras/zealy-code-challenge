import CommentForm from '@/components/comment-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function CommentInArea() {
  const handleFormSubmit = (value: string) => {
    console.log('-------- value ', value);
  };

  const handleTriggerElement = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('----- event ', event);
  };

  return (
    <Card
      className="w-[550px] cursor-pointer"
      onClick={handleTriggerElement}
    >
      <CardHeader>
        <CardTitle>Clickable area</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </CardContent>
      <CommentForm onSubmit={handleFormSubmit} />
    </Card>
  );
}

export default CommentInArea;
