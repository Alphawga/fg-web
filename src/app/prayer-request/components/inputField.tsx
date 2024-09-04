import usePrayerRequestStore from "@/store/prayer-request.store";
import { ChangeEvent } from "react";

type InputProps = {
  required: boolean;
  tag: string;
  label: string;
  type: string;
  width: string;
};
type SelectProps = {
  required: boolean;
  tag: string;
  label: string;
  width: string;
  options: string[];
};
type TextAreaProps = {
  required: boolean;
  tag: string;
  label: string;
  height: string;
};

export function InputField ({ required, tag, label, type, width }: InputProps) {
  const updateFirstName = usePrayerRequestStore((state) => state.setFirstName);
  const updateLastName = usePrayerRequestStore((state) => state.setLastName);
  const updateEmail = usePrayerRequestStore((state) => state.setEmail);

  function handleInputChange (event: ChangeEvent) {
    const target = event.target as HTMLInputElement;

    target.name === "firstName" && updateFirstName(target.value);
    target.name === "lastName" && updateLastName(target.value);
    target.name === "email" && updateEmail(target.value);

    // alert(target.name);
  }

  return (
    <div className={`space-y-3 ${width} `}>
      <label htmlFor={tag} className="text-white text-xl xs:max-md:text-sm">
        {label} {required && <span className="text-fg-gold">*</span>}
      </label>
      <div>
        <input
          onChange={handleInputChange}
          required={required}
          id={tag}
          name={tag}
          type={type}
          className={
            "h-10 w-full border-2 border-[#ABA7A5] border-opacity-25 bg-transparent text-[#ABA7A5] px-2 focus:border-fg-gold outline-fg-gold"
          }
        />
      </div>
    </div>
  );
}

export function SelectField ({
  required,
  tag,
  label,
  options,
}: SelectProps) {
  const updateCampus = usePrayerRequestStore((state) => state.setCampus);
  const updateCategory = usePrayerRequestStore((state) => state.setCategory);

  function handleSelectChange (event: ChangeEvent) {
    const target = event.target as HTMLInputElement;

    target.name === "campus" && updateCampus(target.value);
    target.name === "category" && updateCategory(target.value);
  }

  return (
    <div className={"space-y-3 w-1/2 xs:max-md:w-full flex flex-col"}>
      <label htmlFor={tag} className="text-white text-xl xs:max-md:text-sm">
        {label} {required && <span className="text-fg-gold">*</span>}
      </label>
      <select
        onChange={handleSelectChange}
        id={tag}
        name={tag}
        required={required}
        className="h-10 w-full border-2 border-[#ABA7A5] border-opacity-25 bg-transparent text-[#ABA7A5] px-2 focus-within:border-fg-gold"
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField ({ required, tag, label, height }: TextAreaProps) {
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
