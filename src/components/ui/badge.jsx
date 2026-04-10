export function Badge({ className = '', ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-medium ${className}`}
      {...props}
    />
  )
}
