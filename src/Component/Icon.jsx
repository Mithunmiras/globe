export default function Icon({ name, className = "", ...rest }) {
  return (
    <svg className={className ? `i ${className}` : "i"} {...rest}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
