export default interface EmojiProps {
  value: string;
  activeEmoji: number;
  setEmoji: (emoji: string) => void;
  setActiveEmoji: (index: number) => void;
}
