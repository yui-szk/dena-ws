import { TalkHeader } from "@/components/talk-header";
import { SpeechBubble } from "@/components/speech-bubble";

export default function Page() {
  return (
    <div>
      <TalkHeader icon="/icon-mom.png" name="お母さん" />
      <SpeechBubble
        id=""
        userId=""
        icon="/icon-mom.png"
        name="お母さん"
        text="テストテキストです。テストテキストです。テストテキストです。テストテキストです。テストテキストです。"
        reply={null}
      />
    </div>
  );
}
