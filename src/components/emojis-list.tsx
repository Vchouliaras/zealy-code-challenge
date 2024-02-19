import { Emoji } from '@/components/ui/emoji';

const _EMOJIS = [
  '😃',
  '😄',
  '😊',
  '😇',
  '😂',
  '😈',
  '😋',
  '😌',
  '😌',
  '😝',
  '😕',
  '😖',
  '😞',
  '😑',
  '😠',
  '😣',
  '😱',
  '😃',
  '💌',
  '💤',
  '💢',
  '💣',
  '💥',
  '💦',
  '💨',
  '💫',
  '💬',
  '🗨',
  '🗯',
  '💭',
  '🕳',
  '👓',
  '👕',
  '👖',
  '👗',
  '👘',
  '👙',
  '👚',
  '👛',
  '👜',
  '👝',
  '👩‍👩‍👧‍👧',
  '👩‍👩‍👧‍👧',
];

interface EmojisListProps {
  onEmojiClick: (emoji: string) => void;
}

function EmojisList({ onEmojiClick }: EmojisListProps) {
  return (
    <section className="flex flex-row flex-wrap">
      {_EMOJIS.map((emoji, index) => (
        <Emoji
          key={emoji + index}
          symbol={emoji}
          onClick={() => onEmojiClick(emoji)}
        />
      ))}
    </section>
  );
}

export { _EMOJIS, EmojisList };
