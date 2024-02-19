import { Send, SmilePlus, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { EmojisList, _EMOJIS } from '@/components/emojis-list';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';

interface CommentFormProps {
  onSubmit: (value: string) => void;
}

const _EMOJIS_REGEX = new RegExp(_EMOJIS.join('|'));

function CommentForm({ onSubmit }: CommentFormProps) {
  const [isValid, setIsValid] = useState(false);
  const [formValue, setFormValue] = useState('');

  const submitForm = () => {
    if (formValue) {
      onSubmit(formValue);
      setFormValue('');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  };

  const handleTextAreaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && isValid) {
      e.preventDefault();
      submitForm();
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue(e.target.value);
    if (e.target.value.match(_EMOJIS_REGEX) === null) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleEmoji = (emoji: string) => {
    setFormValue((prev) => prev + emoji);
    setIsValid(true);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="justify-space-between flex w-full flex-row flex-nowrap content-center pt-2"
    >
      <Avatar className="mr-5 self-start">
        <AvatarFallback>
          <UserRound size="30" />
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col">
        <Textarea
          placeholder="Add a comment..."
          className="mb-3"
          value={formValue}
          onKeyDown={handleTextAreaKeyDown}
          onChange={handleTextAreaChange}
        />
        <div className="flex w-full flex-row items-center justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2"
              >
                <SmilePlus size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="mb-2 flex flex-row justify-between">
                <h4 className="flex">Smileys & People</h4>
                <PopoverClose className="absolute right-3 top-3">
                  <X size={20} />
                </PopoverClose>
              </div>
              <PopoverClose asChild>
                <section>
                  <EmojisList onEmojiClick={handleEmoji} />
                </section>
              </PopoverClose>
            </PopoverContent>
          </Popover>
          <Button
            type="submit"
            disabled={!isValid}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
