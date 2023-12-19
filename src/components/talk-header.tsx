import Image from "next/image";

type Props = {
  icon: string;
  name: string;
};

export function TalkHeader({ icon, name }: Props) {
  return (
    <div className="flex justify-between p-4 items-center space-x-5">
      <Image
        src={icon}
        width={36}
        height={36}
        alt="user-icon"
        className="object-cover h-9 w-9 rounded-full"
      />
      <span className="w-full">{name}</span>
      <Image src="/folder-icon.svg" width={24} height={24} alt="user-icon" />
    </div>
  );
}
