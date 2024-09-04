import locations from "@/contents/locations";
import category from "@/contents/category";
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

function InputField ({ required, tag, label, type, width }: InputProps) {
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

function SelectField ({
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

function TextAreaField ({ required, tag, label, height }: TextAreaProps) {
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

export default function RequestDetails () {
  const FirstName = usePrayerRequestStore((state) => state.firstName);
  const LastName = usePrayerRequestStore((state) => state.lastName);
  const Email = usePrayerRequestStore((state) => state.email);
  const Campus = usePrayerRequestStore((state) => state.campus);
  const Category = usePrayerRequestStore((state) => state.category);
  const Request = usePrayerRequestStore((state) => state.request);

  return (
    <section className="mt-10 xs:max-md:mt-5 space-y-10">
      <h2 className="text-fg-gold font-semibold text-3xl xs:max-md:text-2xl">Need Prayers?</h2>
      <div className="text-white">
        {FirstName} | {LastName} | {Email} | { Campus } | { Category } | {Request}
      </div>
      <p className=" text-fg-gr9y xs:max-md:text-sm">
        Let us pray for you. Just fill out this form and let us know your needs.
      </p>
      <form className="space-y-10 xs:max-md:space-y-5">
        <div className="xs:max-md:hidden flex w-full gap-5 items-center xs:max-md:items-start">
          <InputField
            required={true}
            tag="firstName"
            label="First Name"
            type="text"
            width="w-1/2"
          />
          <InputField
            required={true}
            tag="lastName"
            label="Last Name"
            type="text"
            width="w-1/2"
          />
        </div>
        <div className="lg:hidden flex xs:max-md:flex-col w-full gap-5 items-center xs:max-md:items-start">
          <InputField
            required={true}
            tag="firstName"
            label="First Name"
            type="text"
            width="w-full"
          />
          <InputField
            required={true}
            tag="lastName"
            label="Last Name"
            type="text"
            width="w-full"
          />
        </div>
        <InputField
          required={true}
          tag="email"
          label="Email"
          type="email"
          width="w-full"
        />
        <SelectField
          required={true}
          tag="campus"
          label="Select Your Campus"
          width="w-1/2"
          options={locations}
        />
        <SelectField
          required={true}
          tag="category"
          label="Category"
          width="w-1/2"
          options={category}
        />
        <TextAreaField
          required={true}
          tag="request"
          label="Request"
          height="h-80"
        />
        <input
          type="submit"
          value="SUBMIT"
          className="px-5 py-3 bg-fg-gold rounded-full font-medium hover:bg-white"
        />
      </form>
      <div>
        <p className="text-[#ABA7A5] italic text-sm">
          <q>Now to Him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us</q> - Eph 3:20
        </p>
      </div>

    </section>
  );
}
