type Message = {
  id: string;
  userId: string;
  icon: string;
  name: string;
  text: string;
};

type Props = Message & {
  reply: Message | null;
};

export function SpeechBubble({ id, userId, icon, name, text, reply }: Props) {
  return <div>SpeechBubble</div>;
}

// enterで自分のメッセージを表示
// 自分のID以外は左側表示
