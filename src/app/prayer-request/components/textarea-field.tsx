import usePrayerRequestStore from "@/store/prayer-request.store";
import { ChangeEvent } from "react";

type TextAreaProps = {
  required: boolean;
  tag: string;
  label: string;
  height: string;
};

export default function TextAreaField ({
  required,
  tag,
  label,
  height,
}: TextAreaProps) {
  const updateRequest = usePrayerRequestStore((state) => state.setRequest);

  function handleTextAreaChange (event: ChangeEvent) {
    const target = event.target as HTMLInputElement;

    updateRequest(target.value);
  }

  return (
    <div className={"space-y-3 w-full"}>
      <label htmlFor={tag} className="text-white text-xl xs:max-md:text-sm">
        {label} {required && <span className="text-fg-gold">*</span>}
      </label>
      <textarea
        onChange={handleTextAreaChange}
        id={tag}
        name={tag}
        required={required}
        className={`${height} w-full p-2 border-2 border-[#ABA7A5] border-opacity-25 bg-transparent text-[#ABA7A5] px-2 focus-within:border-fg-gold resize-none`}
      />
    </div>
  );
}
