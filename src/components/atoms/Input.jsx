function Input({ type, name, label }) {
  return (
    <>
      <label className="label-form" htmlFor={name}>
        {label}
      </label>
      <input type={type} name={name} id={name} /*placeholder={label}*/ required />
    </>
  );
}

export default Input;
