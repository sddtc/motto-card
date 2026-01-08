const Button = ({ onClick, icon = null, ...props }) => {
  // support both `aria-label` and `ariaLabel` prop styles
  const ariaLabel = props['aria-label'] || props.ariaLabel || 'Like'

  return (
    <button
      type="button"
      className="btn btn-circle"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}

export default Button
