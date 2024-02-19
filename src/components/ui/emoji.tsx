import { Button } from '@/components/ui/button';

export interface EmojiProps extends React.HTMLAttributes<Pick<HTMLButtonElement, 'onclick'>> {
  symbol: string;
}

function Emoji({ symbol, onClick }: EmojiProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="text-xl"
      onClick={onClick}
    >
      {symbol}
    </Button>
  );
}

Emoji.displayName = 'Emoji';

export { Emoji };
