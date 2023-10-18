import "./styles.scss";

function Icon({ name, size = 20, paths, colorClass = "green" }) {
  return (
    <span>
      <svg
        className={colorClass}
        id={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        {paths.map((path, index) => (
          <path d={path} key={index} />
        ))}
      </svg>
    </span>
  );
}

export default Icon;
